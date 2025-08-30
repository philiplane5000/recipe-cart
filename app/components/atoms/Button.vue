<template>
  <component
    :is="componentType"
    class="base-btn"
    :class="[buttonOutlineClass, buttonRoundnessClass, sizeClass, buttonVariantClass]"
    v-bind="componentAttributes"
    @click="handleClick"
  >
    <slot name="prepend" />
    <slot name="default" />
    <slot name="append" />
  </component>
</template>

<script setup lang="ts">
/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Composables ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */
const { name: currentTheme } = useTheme();

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Types ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

/**
 * A type representing the parameter for an outlined button prop, which can either be set as a flag to true
 * for the default 1px outline, or a value of 1-10 indicating the outline width in pixels
 */
export type TBaseButtonOutlineParameter = boolean | 1 | 2 | 3 | 4;

/**
 * A type representing the parameter for a base button's roundness; either circle, pill, or a boolean (true acts as a
 * pill)
 */
export type TBaseButtonRoundnessParameter = boolean | 'circle' | 'pill';

/**
 * A type representing the parameter for a base button's size
 */
export type TBaseButtonSizeParameter = 'x-small' | 'small' | 'default' | 'large' | 'x-large';

/**
 * A type representing the parameter for a base button's variant
 */
export type TBaseButtonVariantParameter = 'primary' | 'secondary';

/**
 * An interface representing props for creating a base button component
 */
export interface IBaseButtonProps {
  /* A flag to indicate if the button should be disabled */
  disabled?: boolean;

  /* The outline for the button; if true uses the default 1px outline */
  outline?: TBaseButtonOutlineParameter;

  /* The roundness for the button; if true uses pill roundness */
  rounded?: TBaseButtonRoundnessParameter;

  /* The size for the button */
  size?: TBaseButtonSizeParameter;

  /* Controls the visual style of the button */
  variant?: TBaseButtonVariantParameter;

  /* The URL to navigate to when the button is rendered as an anchor element */
  href?: string | null;

  /* Specifies where to open the linked document when href is provided */
  target?: '_blank' | '_self' | '_parent' | '_top';
}

/**
 * Attributes specific to a button element when the component renders as a button
 */
export interface IButtonAttributes {
  type: 'button';
  disabled?: boolean;
}

/**
 * Attributes specific to an anchor element when the component renders as a link
 */
export interface IAnchorAttributes {
  'href': string;
  'target'?: '_blank' | '_self' | '_parent' | '_top';
  'aria-disabled'?: string;
  'tabindex'?: string;
}

/**
 * A union type representing all possible attribute combinations based on the rendered element type
 * Used for type-safe binding of dynamic attributes in the BaseButton component
 */
export type TComponentAttributes = IButtonAttributes | IAnchorAttributes;

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Props ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  variant: 'primary',
  size: 'default',
  target: '_self',
  outline: 2,
  href: null,
  rounded: false,
});

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Computed ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

// Determine which component to render
const componentType = computed(() => {
  return props.href ? 'a' : 'button';
});

// Compute the appropriate attributes based on component type
const componentAttributes = computed((): TComponentAttributes => {
  if (props.href) {
    // For anchor element
    const attrs: IAnchorAttributes = {
      href: props.href,
    };

    if (props.target) {
      attrs.target = props.target;
    }

    if (isButtonDisabled.value) {
      attrs['aria-disabled'] = 'true';
      attrs.tabindex = '-1';
    }

    return attrs;
  } else {
    return {
      disabled: isButtonDisabled.value,
      type: 'button',
    };
  }
});

// Compute a class for the button variant based on theme
const buttonVariantClass: ComputedRef<string> = computed(() => {
  const themeType = currentTheme.value === 'dark' ? 'dark-theme' : 'light-theme';

  return `base-btn-${props.variant} base-btn-${props.variant}-${themeType}`;
});

// Compute a class for the button size
const sizeClass: ComputedRef<string> = computed(() => {
  if (props.size === 'x-large') {
    return 'base-btn-size-x-large';
  } else if (props.size === 'large') {
    return 'base-btn-size-large';
  } else if (props.size === 'small') {
    return 'base-btn-size-small';
  } else if (props.size === 'x-small') {
    return 'base-btn-size-x-small';
  } else {
    return 'base-btn-size-medium';
  }
});

// Compute a class for the button outline
const buttonOutlineClass: ComputedRef<string | undefined> = computed(() => {
  if (typeof props.outline === 'number') {
    return `base-btn-outlined-${props.outline}`;
  } else if (props.outline) {
    return 'base-btn-outlined-1';
  } else {
    return undefined;
  }
});

// Compute a class for the button roundness
const buttonRoundnessClass: ComputedRef<string | undefined> = computed(() => {
  if (props.rounded) {
    if (typeof props.rounded === 'boolean' && props.rounded) {
      return 'base-btn-rounded';
    } else if (props.rounded === 'circle') {
      return 'base-btn-rounded base-btn-rounded-circle';
    } else if (props.rounded === 'pill') {
      return 'base-btn-rounded base-btn-rounded-pill';
    }
  }
  return undefined;
});

// Set a computed value for if the button is disabled
const isButtonDisabled = computed(() => props.disabled);

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Emits ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

const emit = defineEmits(['click']);

/* ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ Methods ▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱ */

/**
 * Method to handle button clicks uniquely depending upon component type and disabled state
 * @param event {Event}
 */
function handleClick(event: Event) {
  // Prevent default for disabled links
  if (isButtonDisabled.value && componentType.value !== 'button') {
    event.preventDefault();
    return;
  }

  emit('click', event);
}
</script>

<style scoped lang="scss">
.base-btn {
  @apply flex min-w-max flex-row items-center justify-evenly whitespace-nowrap rounded-lg text-sm font-medium no-underline;

  &:disabled,
  &[aria-disabled='true'] {
    @apply pointer-events-none cursor-not-allowed opacity-60;
  }

  &-size {
    &-x-small {
      @apply px-3 py-1 text-xs leading-tight;
    }

    &-small {
      @apply px-4 py-1.5 text-sm leading-snug;
    }

    &-medium {
      @apply px-5 py-1.5 leading-normal;
    }

    &-large {
      @apply px-6 py-2 leading-7;
    }

    &-x-large {
      @apply px-6 py-3 text-base leading-7 lg:px-8 lg:py-4;
    }
  }

  &-outlined {
    &-1 {
      @apply border-[1px] border-solid;
    }

    &-2 {
      @apply border-[2px] border-solid;
    }

    &-3 {
      @apply border-[3px] border-solid;
    }

    &-4 {
      @apply border-[4px] border-solid;
    }

    &-5 {
      @apply border-[5px] border-solid;
    }
  }

  &-rounded {
    &-circle {
      @apply aspect-square items-center rounded-full;
    }

    &-pill {
      @apply rounded-full;
    }
  }

  &-primary {
    &-light-theme {
      @apply bg-primary-600 font-bold text-white transition-all duration-75 ease-in-out hover:bg-primary-700 disabled:bg-gray-50;
      border-color: rgba(var(--v-theme-on-background), 0.1);

      &:disabled {
        color: rgba(var(--v-theme-on-surface), 0.8);
        border-color: rgba(var(--v-theme-on-background), 0.4);
      }
    }
  }

  &-secondary {
    @apply border-secondary-400 font-medium text-neutral-700 transition-colors duration-75 ease-in-out hover:bg-secondary-600 hover:font-bold disabled:bg-gray-100;
    border-color: rgb(var(--v-theme-secondary-lighten-2), 0.6);
  }
}
</style>

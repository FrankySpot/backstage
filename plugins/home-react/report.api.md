## API Report File for "@backstage/plugin-home-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Extension } from '@backstage/core-plugin-api';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { JSX as JSX_3 } from 'react';
import { Overrides } from '@material-ui/core/styles/overrides';
import { RJSFSchema } from '@rjsf/utils';
import { StyleRules } from '@material-ui/core/styles/withStyles';
import { UiSchema } from '@rjsf/utils';

// @public (undocumented)
export type BackstageOverrides = Overrides & {
  [Name in keyof PluginHomeComponentsNameToClassKey]?: Partial<
    StyleRules<PluginHomeComponentsNameToClassKey[Name]>
  >;
};

// @public (undocumented)
export type CardConfig = {
  layout?: CardLayout;
  settings?: CardSettings;
};

// @public (undocumented)
export type CardExtensionProps<T> = ComponentRenderer & {
  title?: string;
} & T;

// @public (undocumented)
export type CardLayout = {
  width?: {
    minColumns?: number;
    maxColumns?: number;
    defaultColumns?: number;
  };
  height?: {
    minRows?: number;
    maxRows?: number;
    defaultRows?: number;
  };
};

// @public (undocumented)
export type CardSettings = {
  schema?: RJSFSchema;
  uiSchema?: UiSchema;
};

// @public (undocumented)
export type ComponentParts = {
  Content: (props?: any) => JSX.Element;
  Actions?: () => JSX.Element;
  Settings?: () => JSX.Element;
  ContextProvider?: (props: any) => JSX.Element;
};

// @public (undocumented)
export type ComponentRenderer = {
  Renderer?: (props: RendererProps) => JSX.Element;
};

// @public
export const ContentModal: (props: ContentModalProps) => JSX_2.Element;

// @public
export type ContentModalProps = {
  modalContent: JSX_3.Element;
  linkContent: string | JSX_3.Element;
};

// @public
export function createCardExtension<T>(options: {
  title?: string;
  components: () => Promise<ComponentParts>;
  name?: string;
  description?: string;
  layout?: CardLayout;
  settings?: CardSettings;
}): Extension<(props: CardExtensionProps<T>) => JSX_2.Element>;

// @public (undocumented)
export type PluginHomeComponentsNameToClassKey = {
  PluginHomeContentModal: PluginHomeContentModalClassKey;
};

// @public (undocumented)
export type PluginHomeContentModalClassKey = 'contentModal' | 'linkText';

// @public (undocumented)
export type RendererProps = {
  title?: string;
} & ComponentParts;

// @public (undocumented)
export const SettingsModal: (props: {
  open: boolean;
  close: Function;
  componentName?: string;
  children: JSX.Element;
}) => JSX_2.Element;
```

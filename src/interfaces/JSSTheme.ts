import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import {ContentDensity, Themes} from "@ui5/webcomponents-react";


export interface JSSTheme {
  theme: Themes;
  contentDensity: ContentDensity;
  parameters: typeof ThemingParameters;
}

import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import {isIE} from "@ui5/webcomponents-react-base/lib/Device.js";

const labelSpanClasses = () => {
  let styleClasses = {};
  for (let i = 1; i <= 11; i++) {
    styleClasses[`labelSpan${i}`] = {
      '--ui5wcr_form_content_span': 12 - i,
      '--ui5wcr_form_label_span': i
    };
  }
  return styleClasses;
};

const styles = {
  form: {
    display: 'grid',
    alignItems: 'center',
    rowGap: '0.25rem',
    columnGap: '0.5rem',
    //ie11 gap
    marginBottom: isIE() ? '0.25rem' : 0,
    marginLeft: isIE() ? '0.5rem' : 0,
    gridTemplateColumns: `repeat(12, 1fr)`,
    "-ms-grid-columns": "(1fr)[12]",
    '--ui5wcr_form_full_span': 'span 12',
    '--ui5wcr_form_full_span_ie11': 12,
    '--ui5wcr_form_label_text_align': 'end',
    '&[data-columns="1"]': {},
    '&[data-columns="2"]': {
      gridTemplateColumns: `repeat(24, 1fr)`,
      "-ms-grid-columns": "(1fr)[24]",
      '--ui5wcr_form_full_span': 'span 24',
      '--ui5wcr_form_full_span_ie11': 24,
    },
    '&[data-columns="3"]': {
      gridTemplateColumns: `repeat(36, 1fr)`,
      "-ms-grid-columns": "(1fr)[36]",
      '--ui5wcr_form_full_span': 'span 36',
      '--ui5wcr_form_full_span_ie11': 36,
    },
    '&[data-columns="4"]': {
      gridTemplateColumns: `repeat(48, 1fr)`,
      "-ms-grid-columns": "(1fr)[48]",
      '--ui5wcr_form_full_span_ie11': 48,
      '--ui5wcr_form_full_span': 'span 48'
    },
    '&[data-columns="5"]': {
      gridTemplateColumns: `repeat(60, 1fr)`,
      "-ms-grid-columns": "(1fr)[60]",
      '--ui5wcr_form_full_span_ie11': 60,
      '--ui5wcr_form_full_span': 'span 60'
    },
    '&[data-columns="6"]': {
      gridTemplateColumns: `repeat(72, 1fr)`,
      "-ms-grid-columns": "(1fr)[72]",
      '--ui5wcr_form_full_span_ie11': 72,
      '--ui5wcr_form_full_span': 'span 72'
    },
    '&[data-columns="7"]': {
      gridTemplateColumns: `repeat(84, 1fr)`,
      "-ms-grid-columns": "(1fr)[84]",
      '--ui5wcr_form_full_span_ie11': 84,
      '--ui5wcr_form_full_span': 'span 84'
    },
    '&[data-columns="8"]': {
      gridTemplateColumns: `repeat(96, 1fr)`,
      "-ms-grid-columns": "(1fr)[96]",
      '--ui5wcr_form_full_span_ie11': 96,
      '--ui5wcr_form_full_span': 'span 96'
    },
    '&[data-columns="9"]': {
      gridTemplateColumns: `repeat(108, 1fr)`,
      "-ms-grid-columns": "(1fr)[108]",
      '--ui5wcr_form_full_span_ie11': 108,
      '--ui5wcr_form_full_span': 'span 108'
    },
    '&[data-columns="10"]': {
      gridTemplateColumns: `repeat(120, 1fr)`,
      "-ms-grid-columns": "(1fr)[120]",
      '--ui5wcr_form_full_span_ie11': 120,
      '--ui5wcr_form_full_span': 'span 120'
    },
    '&[data-columns="11"]': {
      gridTemplateColumns: `repeat(132, 1fr)`,
      "-ms-grid-columns": "(1fr)[132]",
      '--ui5wcr_form_full_span_ie11': 132,
      '--ui5wcr_form_full_span': 'span 132'
    },
    '&[data-columns="12"]': {
      gridTemplateColumns: `repeat(144, 1fr)`,
      "-ms-grid-columns": "(1fr)[144]",
      '--ui5wcr_form_full_span_ie11': 144,
      '--ui5wcr_form_full_span': 'span 144'
    }
  },
  formTitle: {
    borderBottom: `1px solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
    marginBottom: '1.75rem',
    gridColumn: 'var(--ui5wcr_form_full_span)',
    //todo
    // "-ms-grid-column-span": 'var(--ui5wcr_form_full_span_ie11)',
    "-ms-grid-column-span": 24,

  },
  ...labelSpanClasses(),
  labelSpan12: {
    '--ui5wcr_form_content_span': 12,
    '--ui5wcr_form_label_text_align': 'start'
  }
};

export { styles };

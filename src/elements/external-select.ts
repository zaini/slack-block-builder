import { ElementBuilder } from '../base';
import { ElementSlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import { applyMixins, getPlainTextObject, getBuilderResult } from '../helpers';

import type { ConfirmationDialogBuilder } from '../bits/confirmation-dialog';

export interface ExternalSelectParams {
  actionId?: string;
  minQueryLength?: number;
  placeholder?: string;
}

export interface ExternalSelectBuilder extends HasActionId,
  HasConfirm<ConfirmationDialogBuilder>,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
  MustBuild {
}

/**
 * @@link https://api.slack.com/reference/block-kit/block-elements#external_select
 * @@displayName External Select
 */

export class ExternalSelectBuilder extends ElementBuilder<ExternalSelectParams> {
  public build(): ElementSlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult(ElementSlackDto, augmentedProps);
  }
}

applyMixins(ExternalSelectBuilder, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasMinQueryLength,
  HasPlaceholder,
]);

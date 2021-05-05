import { ElementBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild,
} from '../methods';
import {
  applyMixins,
  getPlainTextObject,
  getBuilderResult,
  getBuilderResults,
} from '../helpers';
import { ElementType } from '../constants';

import type { ConfirmationDialogBit } from '../bits/confirmation-dialog';

export interface StaticSelectParams {
  actionId?: string;
  placeholder?: string;
}

export interface StaticSelectElement extends HasActionId,
  HasConfirm<ConfirmationDialogBit>,
  HasEnd,
  HasInitialOption,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/block-kit/block-elements#static_select|View in Slack API Documentation}
 */

export class StaticSelectElement extends ElementBase implements StaticSelectElement {
  constructor(params?: StaticSelectParams) {
    super(params);

    this.props.type = ElementType.StaticSelect;
  }

  public build(): SlackDto {
    const augmentedProps = {
      placeholder: getPlainTextObject(this.props.placeholder),
      options: getBuilderResults(this.props.options),
      optionGroups: getBuilderResults(this.props.optionGroups),
      initialOption: getBuilderResult(this.props.initialOption),
      confirm: getBuilderResult(this.props.confirm),
    };

    return this.getResult<SlackDto>(SlackDto, augmentedProps);
  }
}

applyMixins(StaticSelectElement, [
  HasActionId,
  HasConfirm,
  HasEnd,
  HasInitialOption,
  HasOptionGroups,
  HasOptions,
  HasPlaceholder,
]);

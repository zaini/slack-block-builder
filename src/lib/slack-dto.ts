import { SurfaceType, BlockType, ElementType } from '../constants';

export enum Param {
  actionId = 'action_id',
  blocks = 'blocks',
  blockId = 'block_id',
  maxSelectedItems = 'max_selected_items',
  title = 'title',
  text = 'text',
  confirm = 'confirm',
  deny = 'deny',
  style = 'style',
  danger = 'danger',
  label = 'label',
  options = 'options',
  value = 'value',
  description = 'description',
  url = 'url',
  elements = 'elements',
  externalId = 'external_id',
  imageUrl = 'image_url',
  altText = 'alt_text',
  element = 'element',
  hint = 'hint',
  optional = 'optional',
  fields = 'fields',
  accessory = 'accessory',
  initialChannels = 'initial_channels',
  initialChannel = 'initial_channel',
  responseUrlEnabled = 'response_url_enabled',
  initialOptions = 'initial_options',
  initialConversations = 'initial_conversations',
  defaultToCurrentConversation = 'default_to_current_conversation',
  filter = 'filter',
  excludeExternalSharedChannels = 'exclude_external_shared_channels',
  excludeBotUsers = 'exclude_bot_users',
  initialConversation = 'initial_conversation',
  initialDate = 'initial_date',
  minQueryLength = 'min_query_length',
  initialOption = 'initial_option',
  optionGroups = 'option_groups',
  placeholder = 'placeholder',
  initialValue = 'initial_value',
  multiline = 'multiline',
  minLength = 'min_length',
  maxLength = 'max_length',
  initialUsers = 'initial_users',
  initialUser = 'initial_user',
  channel = 'channel',
  close = 'close',
  submit = 'submit',
  clearOnClose = 'clear_on_close',
  notifyOnClose = 'notify_on_close',
  privateMetaData = 'private_metadata',
  callbackId = 'callback_id',
  asUser = 'as_user',
  ts = 'ts',
  threadTs = 'thread_ts',
  replaceOriginal = 'replace_original',
  deleteOriginal = 'delete_original',
  responseType = 'response_type',
  postAt = 'post_at',
  color = 'color',
  fallback = 'fallback',
  attachments = 'attachments',
  dispatchAction = 'dispatch_action',
  dispatchActionConfig = 'dispatch_action_config',
  initialTime = 'initial_time',
  mrkdwn = 'mrkdwn',
  submitDisabled = 'submit_disabled',
  type = 'type',
}

export class SlackDto {
  constructor(params) {
    Object.keys(params).forEach((paramName) => {
      const mappedParam = SlackDto.mapParam(paramName);

      if (params[paramName] !== undefined && mappedParam !== undefined) {
        this[mappedParam] = params[paramName];
      }
    });
  }

  public static mapParam(param: string): string {
    return Param[param];
  }
}

export class TypedSlackDto extends SlackDto {
  public readonly type: string;
}

export class ViewSlackDto extends TypedSlackDto {
  public readonly type: SurfaceType;
  public readonly blocks: BlockSlackDto[];
}

export class BlockSlackDto extends TypedSlackDto {
  public readonly type: BlockType;
}

export class ElementSlackDto extends TypedSlackDto {
  public readonly type: ElementType;
}

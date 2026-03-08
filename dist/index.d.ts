import { APICommandAutocompleteInteractionResponseCallbackData, RESTPostAPIApplicationCommandsJSONBody, APIApplicationCommandOption, Locale, ApplicationCommandType, APIApplicationCommandBasicOption, APIApplicationCommandOptionChoice, ChannelType, APIApplicationCommandSubcommandGroupOption, APIApplicationCommandSubcommandOption, ApplicationIntegrationType, InteractionContextType, EntryPointCommandHandlerType, APIButtonComponent, APIMessageComponentEmoji, APIStringSelectComponent, APIUserSelectComponent, APIRoleSelectComponent, APIMentionableSelectComponent, APIChannelSelectComponent, APISelectMenuOption, APIComponentInMessageActionRow, APIActionRowComponent, APIEmbed, EmbedType, APIEmbedField, RESTAPIPoll, APIPartialEmoji, RESTGetAPIWebhookWithTokenMessageQuery, RESTGetAPIApplicationCommandsQuery, RESTGetAPIApplicationGuildCommandsQuery, RESTGetAPIAuditLogQuery, RESTGetAPIChannelThreadMemberQuery, RESTGetAPIChannelThreadMembersQuery, RESTGetAPIEntitlementsQuery, RESTGetAPIGuildQuery, RESTGetAPIGuildMembersQuery, RESTGetAPIGuildMembersSearchQuery, RESTGetAPIGuildBansQuery, RESTGetAPIGuildPruneCountQuery, RESTGetAPIGuildWidgetImageQuery, RESTGetAPIGuildScheduledEventsQuery, RESTGetAPIGuildScheduledEventQuery, RESTGetAPIGuildScheduledEventUsersQuery, RESTGetAPIInviteQuery, RESTGetAPIChannelMessagesQuery, RESTGetAPIChannelMessageReactionUsersQuery, RESTGetAPIPollAnswerVotersQuery, RESTGetAPISKUSubscriptionsQuery, RESTGetAPICurrentUserGuildsQuery, RESTPostAPIWebhookWithTokenQuery, RESTPostAPIInteractionCallbackQuery, RESTPostAPIWebhookWithTokenSlackQuery, RESTPostAPIWebhookWithTokenGitHubQuery, RESTGetAPIInteractionOriginalResponseResult, RESTGetAPIInteractionFollowupResult, RESTGetAPIWebhookWithTokenMessageResult, RESTGetAPIApplicationCommandsResult, RESTGetAPIApplicationCommandResult, RESTGetAPIApplicationGuildCommandsResult, RESTGetAPIApplicationGuildCommandResult, RESTGetAPIGuildApplicationCommandsPermissionsResult, RESTGetAPIApplicationCommandPermissionsResult, RESTGetCurrentApplicationResult, RESTGetAPIApplicationRoleConnectionMetadataResult, RESTGetAPIAuditLogResult, RESTGetAPIAutoModerationRulesResult, RESTGetAPIAutoModerationRuleResult, RESTGetAPIChannelResult, RESTGetAPIChannelInvitesResult, RESTGetAPIChannelPinsResult, RESTGetAPIChannelThreadMemberResult, RESTGetAPIChannelThreadMembersResult, RESTGetAPIChannelThreadsArchivedPublicResult, RESTGetAPIChannelThreadsArchivedPrivateResult, RESTGetAPIGuildEmojisResult, RESTGetAPIGuildEmojiResult, RESTGetAPIApplicationEmojisResult, RESTGetAPIApplicationEmojiResult, RESTGetAPIEntitlementsResult, RESTGetAPIEntitlementResult, RESTGetAPIGuildResult, RESTGetAPIGuildPreviewResult, RESTGetAPIGuildChannelsResult, RESTGetAPIGuildThreadsResult, RESTGetAPIGuildMemberResult, RESTGetAPIGuildMembersResult, RESTGetAPIGuildMembersSearchResult, RESTGetAPIGuildBansResult, RESTGetAPIGuildBanResult, RESTGetAPIGuildRolesResult, RESTGetAPIGuildRoleResult, RESTGetAPIGuildPruneCountResult, RESTGetAPIGuildVoiceRegionsResult, RESTGetAPIGuildInvitesResult, RESTGetAPIGuildIntegrationsResult, RESTGetAPIGuildWidgetSettingsResult, RESTGetAPIGuildWidgetJSONResult, RESTGetAPIGuildVanityUrlResult, RESTGetAPIGuildWidgetImageResult, RESTGetAPIGuildWelcomeScreenResult, RESTGetAPIGuildOnboardingResult, RESTGetAPIGuildScheduledEventsResult, RESTGetAPIGuildScheduledEventResult, RESTGetAPIGuildScheduledEventUsersResult, RESTGetAPITemplateResult, RESTGetAPIGuildTemplatesResult, RESTGetAPIInviteResult, RESTGetAPIChannelMessagesResult, RESTGetAPIChannelMessageResult, RESTGetAPIChannelMessageReactionUsersResult, RESTGetAPIPollAnswerVotersResult, RESTGetAPISKUsResult, RESTGetAPISoundboardDefaultSoundsResult, RESTGetAPIGuildSoundboardSoundsResult, RESTGetAPIGuildSoundboardSoundResult, RESTGetAPIStageInstanceResult, RESTGetAPIStickerResult, RESTGetStickerPacksResult, RESTGetAPIStickerPackResult, RESTGetAPIGuildStickersResult, RESTGetAPIGuildStickerResult, RESTGetAPISKUSubscriptionsResult, RESTGetAPISKUSubscriptionResult, RESTGetAPICurrentUserResult, RESTGetAPIUserResult, RESTGetAPICurrentUserGuildsResult, RESTGetCurrentUserGuildMemberResult, RESTGetAPICurrentUserConnectionsResult, RESTGetAPICurrentUserApplicationRoleConnectionResult, RESTGetAPIVoiceRegionsResult, RESTGetAPIGuildVoiceStateCurrentMemberResult, RESTGetAPIGuildVoiceStateUserResult, RESTGetAPIChannelWebhooksResult, RESTGetAPIGuildWebhooksResult, RESTGetAPIWebhookResult, RESTGetAPIWebhookWithTokenResult, RESTPutAPIApplicationCommandsResult, RESTPutAPIApplicationGuildCommandsResult, RESTPutAPIApplicationCommandPermissionsResult, RESTPutAPIGuildApplicationCommandsPermissionsResult, RESTPutAPIApplicationRoleConnectionMetadataResult, RESTPutAPIChannelPermissionResult, RESTPutAPIChannelPinResult, RESTPutAPIChannelRecipientResult, RESTPutAPIChannelThreadMembersResult, RESTPutAPIGuildMemberResult, RESTPutAPIGuildMemberRoleResult, RESTPutAPIGuildBanResult, RESTPutAPIGuildOnboardingResult, RESTPutAPIGuildTemplateSyncResult, RESTPutAPIChannelMessageReactionResult, RESTPutAPICurrentUserApplicationRoleConnectionResult, RESTPostAPIInteractionCallbackResult, RESTPostAPIInteractionFollowupResult, RESTPostAPIApplicationCommandsResult, RESTPostAPIApplicationGuildCommandsResult, RESTPostAPIAutoModerationRuleResult, RESTPostAPIChannelInviteResult, RESTPostAPIChannelFollowersResult, RESTPostAPIChannelTypingResult, RESTPostAPIChannelMessagesThreadsResult, RESTPostAPIChannelThreadsResult, RESTPostAPIGuildEmojiResult, RESTPostAPIApplicationEmojiResult, RESTPostAPIEntitlementConsumeResult, RESTPostAPIEntitlementResult, RESTPostAPIGuildsResult, RESTPostAPIGuildChannelResult, RESTPostAPIGuildBulkBanResult, RESTPostAPIGuildRoleResult, RESTPostAPIGuildsMFAResult, RESTPostAPIGuildPruneResult, RESTPostAPIGuildScheduledEventResult, RESTPostAPITemplateCreateGuildResult, RESTPostAPIGuildTemplatesResult, RESTPostAPIChannelMessageResult, RESTPostAPIChannelMessageCrosspostResult, RESTPostAPIChannelMessagesBulkDeleteResult, RESTPostAPIPollExpireResult, RESTPostAPIGuildSoundboardSoundResult, RESTPostAPIStageInstanceResult, RESTPostAPICurrentUserCreateDMChannelResult, RESTPostAPIChannelWebhookResult, RESTPostAPIWebhookWithTokenResult, RESTPostAPIWebhookWithTokenWaitResult, RESTPostAPIWebhookWithTokenSlackResult, RESTPostAPIWebhookWithTokenSlackWaitResult, RESTPostAPIWebhookWithTokenGitHubResult, RESTPostAPIWebhookWithTokenGitHubWaitResult, RESTPatchAPIInteractionOriginalResponseResult, RESTPatchAPIInteractionFollowupResult, RESTPatchAPIApplicationCommandResult, RESTPatchAPIApplicationGuildCommandResult, RESTPatchCurrentApplicationResult, RESTPatchAPIAutoModerationRuleResult, RESTPatchAPIChannelResult, RESTPatchAPIGuildEmojiResult, RESTPatchAPIApplicationEmojiResult, RESTPatchAPIGuildResult, RESTPatchAPIGuildChannelPositionsResult, RESTPatchAPIGuildMemberResult, RESTPatchAPICurrentGuildMemberNicknameResult, RESTPatchAPIGuildRolePositionsResult, RESTPatchAPIGuildRoleResult, RESTPatchAPIGuildWidgetSettingsResult, RESTPatchAPIGuildWelcomeScreenResult, RESTPatchAPIGuildScheduledEventResult, RESTPatchAPIGuildTemplateResult, RESTPatchAPIChannelMessageResult, RESTPatchAPIGuildSoundboardSoundResult, RESTPatchAPIStageInstanceResult, RESTPatchAPIGuildStickerResult, RESTPatchAPICurrentUserResult, RESTPatchAPIGuildVoiceStateCurrentMemberResult, RESTPatchAPIGuildVoiceStateUserResult, RESTPatchAPIWebhookResult, RESTPatchAPIWebhookWithTokenResult, RESTPatchAPIWebhookWithTokenMessageResult, RESTDeleteAPIChannelResult, RESTDeleteAPIChannelPermissionResult, RESTDeleteAPIChannelPinResult, RESTDeleteAPIChannelRecipientResult, RESTDeleteAPIChannelThreadMembersResult, RESTDeleteAPIGuildEmojiResult, RESTDeleteAPIApplicationEmojiResult, RESTDeleteAPIEntitlementResult, RESTDeleteAPIGuildResult, RESTDeleteAPIGuildMemberRoleResult, RESTDeleteAPIGuildMemberResult, RESTDeleteAPIGuildBanResult, RESTDeleteAPIGuildRoleResult, RESTDeleteAPIGuildIntegrationResult, RESTDeleteAPIGuildScheduledEventResult, RESTDeleteAPIGuildTemplateResult, RESTDeleteAPIInviteResult, RESTDeleteAPIChannelMessageOwnReactionResult, RESTDeleteAPIChannelMessageUserReactionResult, RESTDeleteAPIChannelMessageReactionResult, RESTDeleteAPIChannelMessageResult, RESTDeleteAPIGuildSoundboardSoundResult, RESTDeleteAPIStageInstanceResult, RESTDeleteAPIGuildStickerResult, RESTDeleteAPICurrentUserGuildResult, RESTDeleteAPIWebhookResult, RESTDeleteAPIWebhookWithTokenResult, RESTDeleteAPIWebhookWithTokenMessageResult, RESTPutAPIApplicationCommandsJSONBody, RESTPutAPIApplicationGuildCommandsJSONBody, RESTPutAPIApplicationCommandPermissionsJSONBody, RESTPutAPIGuildApplicationCommandsPermissionsJSONBody, RESTPutAPIApplicationRoleConnectionMetadataJSONBody, RESTPutAPIChannelPermissionJSONBody, RESTPutAPIChannelRecipientJSONBody, RESTPutAPIGuildMemberJSONBody, RESTPutAPIGuildBanJSONBody, RESTPutAPIGuildOnboardingJSONBody, RESTPutAPIGuildIncidentActionsJSONBody, RESTPutAPICurrentUserApplicationRoleConnectionJSONBody, RESTPostAPIInteractionFollowupJSONBody, RESTPostAPIWebhookWithTokenJSONBody, APIInteractionResponse, RESTPostAPIApplicationGuildCommandsJSONBody, RESTPostAPIAutoModerationRuleJSONBody, RESTPostAPIChannelInviteJSONBody, RESTPostAPIChannelFollowersJSONBody, RESTPostAPIChannelMessagesThreadsJSONBody, RESTPostAPIChannelThreadsJSONBody, RESTPostAPIGuildEmojiJSONBody, RESTPostAPIApplicationEmojiJSONBody, RESTPostAPIEntitlementJSONBody, RESTPostAPIGuildsJSONBody, RESTPostAPIGuildChannelJSONBody, RESTPostAPIGuildBulkBanJSONBody, RESTPostAPIGuildRoleJSONBody, RESTPostAPIGuildsMFAJSONBody, RESTPostAPIGuildPruneJSONBody, RESTPostAPIGuildScheduledEventJSONBody, RESTPostAPITemplateCreateGuildJSONBody, RESTPostAPIGuildTemplatesJSONBody, RESTPostAPIChannelMessageJSONBody, RESTPostAPIChannelMessagesBulkDeleteJSONBody, RESTPostAPISoundboardSendSoundJSONBody, RESTPostAPIGuildSoundboardSoundJSONBody, RESTPostAPIStageInstanceJSONBody, RESTPostAPICurrentUserCreateDMChannelJSONBody, RESTPostAPIChannelWebhookJSONBody, RESTPatchAPIInteractionFollowupJSONBody, RESTPatchAPIWebhookWithTokenMessageJSONBody, RESTPatchAPIInteractionOriginalResponseJSONBody, RESTPatchAPIApplicationCommandJSONBody, RESTPatchAPIApplicationGuildCommandJSONBody, RESTPatchCurrentApplicationJSONBody, RESTPatchAPIAutoModerationRuleJSONBody, RESTPatchAPIChannelJSONBody, RESTPatchAPIGuildEmojiJSONBody, RESTPatchAPIApplicationEmojiJSONBody, RESTPatchAPIGuildJSONBody, RESTPatchAPIGuildChannelPositionsJSONBody, RESTPatchAPIGuildMemberJSONBody, RESTPatchAPICurrentGuildMemberJSONBody, RESTPatchAPICurrentGuildMemberNicknameJSONBody, RESTPatchAPIGuildRolePositionsJSONBody, RESTPatchAPIGuildRoleJSONBody, RESTPatchAPIGuildWidgetSettingsJSONBody, RESTPatchAPIGuildWelcomeScreenJSONBody, RESTPatchAPIGuildScheduledEventJSONBody, RESTPatchAPIGuildTemplateJSONBody, RESTPatchAPIChannelMessageJSONBody, RESTPatchAPIGuildSoundboardSoundJSONBody, RESTPatchAPIStageInstanceJSONBody, RESTPatchAPIGuildStickerJSONBody, RESTPatchAPICurrentUserJSONBody, RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody, RESTPatchAPIGuildVoiceStateUserJSONBody, RESTPatchAPIWebhookJSONBody, RESTPatchAPIWebhookWithTokenJSONBody, APIInteraction, APIInteractionResponseCallbackData, APIMessage, APIModalInteractionResponseCallbackData, APIApplicationCommandInteractionDataStringOption, APIApplicationCommandInteractionDataIntegerOption, APIApplicationCommandInteractionDataNumberOption, APIInteractionDataResolved, APIMessageApplicationCommandInteractionDataResolved, APIApplicationCommandInteraction, APIMessageComponentButtonInteraction, APIMessageComponentSelectMenuInteraction, APIMessageComponentInteraction, APIModalSubmitInteraction, APIApplicationCommandAutocompleteInteraction, APISectionComponent, APISeparatorComponent, APIContainerComponent, APITextDisplayComponent, APIThumbnailComponent, APIMediaGalleryComponent, APIFileComponent, APITextInputComponent } from 'discord-api-types/v10';
import { EmbedBuilder, SlashCommandBuilder } from '@discordjs/builders';

type MergeObjects<T extends object[]> = T extends [infer F, ...infer R] ? F & MergeObjects<Extract<R, object[]>> : {};
declare abstract class Builder<Obj extends {}> {
    #private;
    constructor(init: Obj);
    /**
     * assign object `Object.assign(this.#store, obj)`
     */
    protected a(obj: Partial<Obj>): this;
    /**
     * export json object
     * @returns {Obj}
     */
    toJSON(): Obj;
}

declare class Autocomplete extends Builder<APICommandAutocompleteInteractionResponseCallbackData> {
    #private;
    constructor(search?: string | number);
    choices(...e: Required<APICommandAutocompleteInteractionResponseCallbackData>['choices']): this;
}

type ExtractOptionArgs<T> = T extends Option<infer K, infer T2, infer R> ? {
    [P in K]: T2 extends 'String' ? string : T2 extends 'Integer' | 'Number' ? number : T2 extends 'Boolean' ? boolean : string;
} extends infer O ? R extends true ? O : Partial<O> : never : never;
type ExtractOptionsObject<T extends any[]> = MergeObjects<{
    [I in keyof T]: T[I] extends Option<any, any, any> ? ExtractOptionArgs<T[I]> : T[I] extends SubCommand<infer V> ? V : T[I] extends SubGroup<infer V> ? V : never;
}>;
declare abstract class CommandBase<Obj extends RESTPostAPIApplicationCommandsJSONBody | APIApplicationCommandOption> extends Builder<Obj> {
    /**
     * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
     * @param {string} name 1-32 character name; `CHAT_INPUT` command names must be all lowercase matching `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$`
     * @param {string} description 1-100 character description for `CHAT_INPUT` commands, empty string for `USER` and `MESSAGE` commands
     */
    constructor(name: string, description?: string);
    /**
     * [Locale](https://discord.com/developers/docs/reference#locales)
     *
     * Localization dictionary for the name field. Values follow the same restrictions as name
     * @param {Partial<Record<Locale, string>>} e
     * @returns {this}
     */
    name_localizations(e: Partial<Record<Locale, string>>): this;
    /**
     * [Locale](https://discord.com/developers/docs/reference#locales)
     *
     * Localization dictionary for the description field. Values follow the same restrictions as description
     * @param {Partial<Record<Locale, string>>} e
     * @returns {this}
     */
    description_localizations(e: Partial<Record<Locale, string>>): this;
}
declare class Command<_V extends {} = {}> extends CommandBase<RESTPostAPIApplicationCommandsJSONBody> {
    /**
     * @param {string} e
     * @returns {this}
     */
    id(e: string): this;
    /**
     * [Application Command Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types)
     * @param {ApplicationCommandType} e
     * @returns {this}
     */
    type(e: ApplicationCommandType): this;
    /**
     * @param {string} e
     * @returns {this}
     */
    application_id(e: string): this;
    /**
     * Guild id of the command, if not global
     * @param {string} e
     * @returns {this}
     */
    guild_id(e: string): this;
    /**
     * Valid Types: 1:CHAT_INPUT
     * @param {...(Option | APIApplicationCommandOption)} e
     * @returns {this}
     */
    options<O extends (Option<any, any, any> | SubGroup | SubCommand | APIApplicationCommandOption)[]>(...e: O): Command<ExtractOptionsObject<O>>;
    /**
     * @param {string | null} e
     * @returns {this}
     */
    default_member_permissions(e: string | null): this;
    /**
     * @deprecated Use `contexts` instead
     * @param {boolean} [e=true]
     * @returns {this}
     */
    dm_permission(e?: boolean): this;
    /**
     * Whether the command is enabled by default when the app is added to a guild
     *
     * If missing, this property should be assumed as `true`
     * @deprecated Use `default_member_permissions` instead
     * @param {boolean} [e=true]
     * @returns {this}
     */
    default_permission(e?: boolean): this;
    /**
     * Indicates whether the command is age-restricted
     * @param {boolean} [e=true]
     * @returns {this}
     */
    nsfw(e?: boolean): this;
    /**
     * [Application Integration Types](https://discord.com/developers/docs/resources/application#application-object-application-integration-types)
     *
     * Installation context(s) where the command is available, only for globally-scoped commands.
     * @unstable
     * @param {...ApplicationIntegrationType} e
     * @returns {this}
     */
    integration_types(...e: ApplicationIntegrationType[]): this;
    /**
     * [Interaction Context Types](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types)
     *
     * Interaction context(s) where the command can be used, only for globally-scoped commands.
     * @unstable
     * @param {...InteractionContextType} e
     * @returns {this}
     */
    contexts(...e: InteractionContextType[]): this;
    /**
     * @param {string} e
     * @returns {this}
     */
    version(e: string): this;
    /**
     * Valid Types: 4:PRIMARY_ENTRY_POINT
     *
     * [Hander Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-entry-point-command-handler-types)
     * @param e
     * @returns
     */
    handler(e: EntryPointCommandHandlerType): this;
}
declare class SubGroup<_V extends {} = {}> extends CommandBase<APIApplicationCommandSubcommandGroupOption> {
    /**
     * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
     * @param {string} name 1-32 character name
     * @param {string} description 1-100 character description
     */
    constructor(name: string, description?: string);
    /**
     * @param {...(SubCommand | APIApplicationCommandSubcommandOption)} e
     * @returns {this}
     */
    options<O extends (SubCommand | APIApplicationCommandSubcommandOption)[]>(...e: O): SubGroup<ExtractOptionsObject<O>>;
}
declare class SubCommand<_V extends {} = {}> extends CommandBase<APIApplicationCommandSubcommandOption> {
    /**
     * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
     * @param {string} name 1-32 character name
     * @param {string} description 1-100 character description
     */
    constructor(name: string, description?: string);
    /**
     * @param {...(Option | APIApplicationCommandBasicOption)} e
     * @returns {this}
     */
    options<O extends (Option<any, any, any> | APIApplicationCommandBasicOption)[]>(...e: O): SubCommand<ExtractOptionsObject<O>>;
}
type OptionType = 'String' | 'Integer' | 'Number' | 'Boolean' | 'User' | 'Channel' | 'Role' | 'Mentionable' | 'Attachment';
declare class Option<K extends string, T extends OptionType = 'String', _R extends boolean = false> extends CommandBase<APIApplicationCommandBasicOption> {
    #private;
    /**
     * [Command Option Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure)
     * @param {string} name 1-32 character name
     * @param {string} description 1-100 character description
     * @param {"String" | "Integer" | "Number" | "Boolean" | "User" | "Channel" | "Role" | "Mentionable" | "Attachment"} [option_type="String"]
     */
    constructor(name: K, description: string, option_type?: T);
    /**
     * @param {boolean} [e=true]
     * @returns {this}
     */
    required<R extends boolean = true>(e?: R): Option<K, T, R>;
    /**
     * available: String, Integer, Number
     * @param {...APIApplicationCommandOptionChoice<string | number>} e
     * @returns {this}
     */
    choices(...e: T extends 'String' ? APIApplicationCommandOptionChoice<string>[] : T extends 'Integer' | 'Number' ? APIApplicationCommandOptionChoice<number>[] : undefined[]): this;
    /**
     * available: Channel
     *
     * [Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
     * @param {...ChannelType} e
     * @returns {this}
     */
    channel_types(...e: T extends 'Channel' ? ChannelType[] : undefined[]): this;
    /**
     * available: Integer, Number
     * @param e
     * @returns {this}
     */
    min_value(e: T extends 'Integer' | 'Number' ? number : undefined): this;
    /**
     * available: Integer, Number
     * @param e
     * @returns {this}
     */
    max_value(e: T extends 'Integer' | 'Number' ? number : undefined): this;
    /**
     * available: String
     * @param e 0 - 6000
     * @returns {this}
     */
    min_length(e: T extends 'String' ? number : undefined): this;
    /**
     * available: String
     * @param e 1 - 6000
     * @returns {this}
     */
    max_length(e: T extends 'String' ? number : undefined): this;
    /**
     * available: String, Integer, Number
     * @param e default: true
     * @returns {this}
     */
    autocomplete(e?: T extends 'String' | 'Integer' | 'Number' ? boolean : undefined): this;
}

/**
 * [Message Components](https://discord.com/developers/docs/interactions/message-components)
 */
declare class Components {
    #private;
    /**
     * push component
     * @param {...(Button | Select | APIComponentInMessageActionRow)} e
     * @returns {this}
     */
    row(...e: (Button<any> | Select<any, any> | APIComponentInMessageActionRow)[]): this;
    /**
     * export json object
     * @returns {Obj}
     */
    toJSON(): APIActionRowComponent<APIComponentInMessageActionRow>[];
}
declare const buttonStyleNum: {
    readonly Primary: 1;
    readonly Secondary: 2;
    readonly Success: 3;
    readonly Danger: 4;
    readonly Link: 5;
    readonly SKU: 6;
};
type ButtonStyle = keyof typeof buttonStyleNum;
declare class Button<T extends ButtonStyle = 'Primary'> extends Builder<APIButtonComponent> {
    #private;
    /**
     * [Button Structure](https://discord.com/developers/docs/interactions/message-components#button-object)
     * @param {string} str Basic: unique_id, Link: URL, SKU: sku_id
     * @param {string} label The label to be displayed on the button. max 80 characters - Ignore: SKU
     * @param {"Primary" | "Secondary" | "Success" | "Danger" | "Link" | "SKU"} [button_style="Primary"]
     */
    constructor(str: string, labels: T extends 'SKU' ? '' | undefined : string | [string | APIMessageComponentEmoji, string], button_style?: T);
    /**
     * available: Primary, Secondary, Success, Danger, Link
     * @param {string | APIMessageComponentEmoji} e
     * @returns {this}
     */
    emoji(e: T extends 'SKU' ? undefined : string | APIMessageComponentEmoji): this;
    /**
     * available: Primary, Secondary, Success, Danger
     * @param {string} e
     * @returns {this}
     */
    custom_id(e: T extends 'Link' | 'SKU' ? undefined : string): this;
    /**
     * available: ALL
     * @param {boolean} [e=true]
     * @returns {this}
     */
    disabled(e?: boolean): this;
    /**
     * Overwrite label
     *
     * available: Primary, Secondary, Success, Danger, Link
     * @param {string} e
     * @returns {this}
     */
    label(e: T extends 'SKU' ? undefined : string): this;
    /**
     * Overwrite button style
     *
     * available: Primary, Secondary, Success, Danger
     * @param {"Primary" | "Secondary" | "Success" | "Danger"} e
     * @returns {this}
     */
    style(e: Exclude<ButtonStyle, 'Link' | 'SKU'>): this;
}
type SelectType = 'String' | 'User' | 'Role' | 'Mentionable' | 'Channel';
type SelectComponent = APIStringSelectComponent | APIUserSelectComponent | APIRoleSelectComponent | APIMentionableSelectComponent | APIChannelSelectComponent;
declare class Select<K extends string, T extends SelectType = 'String'> extends Builder<SelectComponent> {
    #private;
    /**
     * [Select Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object)
     * @param {string} unique_id
     * @param {"String" | "User" | "Role" | "Mentionable" | "Channel"} [selectType="String"]
     */
    constructor(unique_id: K, select_type?: T);
    /**
     * available: ALL
     * @param {string} e
     * @returns {this}
     */
    custom_id(e: string): this;
    /**
     * required: String
     *
     * [Select Option Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure)
     * @param {APISelectMenuOption} e
     * @returns {this}
     */
    options(...e: T extends 'String' ? APISelectMenuOption[] : undefined[]): this;
    /**
     * available: Channel
     *
     * [Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
     * @param {...ChannelType} e
     * @returns {this}
     */
    channel_types(...e: T extends 'Channel' ? ChannelType[] : undefined[]): this;
    /**
     * Custom placeholder text if nothing is selected, max 150 characters
     * @param {string} e
     * @returns {this}
     */
    placeholder(e: string): this;
    /**
     * available: User, Role, Channel, Mentionable
     *
     * [Select Default Value Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure)
     * @param {...{ id: string, type: "user" | "role" | "channel" }} e
     * @returns {this}
     */
    default_values(...e: T extends 'String' ? never[] : {
        id: string;
        type: T extends 'User' ? 'user' : T extends 'Role' ? 'role' : T extends 'Channel' ? 'channel' : T extends 'Mentionable' ? 'user' | 'role' : never;
    }[]): this;
    /**
     * The minimum number of items that must be chosen; min 0, max 25
     * @param {number} [e=1]
     * @returns {this}
     */
    min_values(e?: number): this;
    /**
     * The maximum number of items that can be chosen; max 25
     * @param {number} [e=1]
     * @returns {this}
     */
    max_values(e?: number): this;
    /**
     * Disable the select
     * @param {boolean} [e=true]
     * @returns {this}
     */
    disabled(e?: boolean): this;
}

declare class Embed extends Builder<APIEmbed> {
    /**
     * [Embed Structure](https://discord.com/developers/docs/resources/message#embed-object)
     */
    constructor();
    /**
     * @param {string} e Length limit: 256 characters
     * @returns {this}
     */
    title(e: string): this;
    /**
     * @deprecated Embed types should be considered deprecated and might be removed in a future API version
     * @param {EmbedType} e
     * @returns {this}
     */
    type(e: EmbedType): this;
    /**
     * @param {string} e Length limit: 4096 characters
     * @returns {this}
     */
    description(e: string): this;
    /**
     * @param {string} e
     * @returns {this}
     */
    url(e: string): this;
    /**
     * @param {string} e ISO8601 timestamp
     * @returns {this}
     */
    timestamp(e: string): this;
    /**
     * @param {number} e
     * @returns {this}
     */
    color(e: number): this;
    /**
     * [Footer Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure)
     * @param {NonNullable<APIEmbed["footer"]>} e
     * @returns {this}
     */
    footer(e: NonNullable<APIEmbed['footer']>): this;
    /**
     * [Image Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure)
     * @param {NonNullable<APIEmbed["image"]>} e
     * @returns {this}
     */
    image(e: NonNullable<APIEmbed['image']>): this;
    /**
     * [Thumbnail Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure)
     * @param {NonNullable<APIEmbed["thumbnail"]>} e
     * @returns {this}
     */
    thumbnail(e: NonNullable<APIEmbed['thumbnail']>): this;
    /**
     * [Video Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure)
     * @param {NonNullable<APIEmbed["video"]>} e
     * @returns {this}
     */
    video(e: NonNullable<APIEmbed['video']>): this;
    /**
     * [Provider Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure)
     * @param {NonNullable<APIEmbed["provider"]>} e
     * @returns {this}
     */
    provider(e: NonNullable<APIEmbed['provider']>): this;
    /**
     * [Author Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure)
     * @param {NonNullable<APIEmbed["author"]>} e
     * @returns {this}
     */
    author(e: NonNullable<APIEmbed['author']>): this;
    /**
     * [Field Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure)
     * @param {...APIEmbedField} e Length limit: 25 field objects
     * @returns {this}
     */
    fields(...e: APIEmbedField[]): this;
}

declare class Poll extends Builder<RESTAPIPoll> {
    constructor(question?: string, ...answers: (string | [string | APIPartialEmoji, string])[]);
    /**
     * overwrite question
     * @param {string} question
     * @returns {this}
     */
    question(question: string): this;
    /**
     * overwrite answers
     * @param {string | [string | APIPartialEmoji, string]} answers
     * @returns {this}
     */
    answers(...answers: (string | [string | APIPartialEmoji, string])[]): this;
    /**
     * Number of hours the poll should be open for, up to 32 days. Defaults to 24
     * @param {number} duration
     * @returns {this}
     */
    duration(duration?: number): this;
    /**
     * Whether a user can select multiple answers.
     * @param {boolean} allow_multiselect
     * @returns {this}
     */
    allow_multiselect(allow_multiselect?: boolean): this;
    /**
     * https://discord.com/developers/docs/resources/poll#layout-type
     * @param {number} layout_type
     * @returns {this}
     */
    layout_type(layout_type: number): this;
}

declare const $webhooks$_$_: "/webhooks/{application.id}/{interaction.token}" | "/webhooks/{webhook.id}/{webhook.token}";
declare const $webhooks$_$_$messages$_: "/webhooks/{application.id}/{interaction.token}/messages/{message.id}" | "/webhooks/{webhook.id}/{webhook.token}/messages/{message.id}";
/**
 * @deprecated Use `$webhooks$_$_` instead
 */
declare const _webhooks_$_$: typeof $webhooks$_$_;
/**
 * @deprecated Use `$webhooks$_$_$messages$_` instead
 */
declare const _webhooks_$_$_messages_$: typeof $webhooks$_$_$messages$_;
declare const $interactions$_$_$callback: "/interactions/{interaction.id}/{interaction.token}/callback";
declare const $webhooks$_$_$messages$original: "/webhooks/{application.id}/{interaction.token}/messages/@original";
/**
 * @deprecated Use `$interactions$_$_$callback` instead
 */
declare const _interactions_$_$_callback: typeof $interactions$_$_$callback;
/**
 * @deprecated Use `$webhooks$_$_$messages$original` instead
 */
declare const _webhooks_$_$_messages_original: typeof $webhooks$_$_$messages$original;
declare const $applications$_$commands: "/applications/{application.id}/commands";
declare const $applications$_$commands$_: "/applications/{application.id}/commands/{command.id}";
declare const $applications$_$guilds$_$commands: "/applications/{application.id}/guilds/{guild.id}/commands";
declare const $applications$_$guilds$_$commands$_: "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}";
declare const $applications$_$guilds$_$commands$permissions: "/applications/{application.id}/guilds/{guild.id}/commands/permissions";
declare const $applications$_$guilds$_$commands$_$permissions: "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions";
/**
 * @deprecated Use `$applications$_$commands` instead
 */
declare const _applications_$_commands: typeof $applications$_$commands;
/**
 * @deprecated Use `$applications$_$commands$_` instead
 */
declare const _applications_$_commands_$: typeof $applications$_$commands$_;
/**
 * @deprecated Use `$applications$_$guilds$_$commands` instead
 */
declare const _applications_$_guilds_$_commands: typeof $applications$_$guilds$_$commands;
/**
 * @deprecated Use `$applications$_$guilds$_$commands$_` instead
 */
declare const _applications_$_guilds_$_commands_$: typeof $applications$_$guilds$_$commands$_;
/**
 * @deprecated Use `$applications$_$guilds$_$commands$permissions` instead
 */
declare const _applications_$_guilds_$_commands_permissions: typeof $applications$_$guilds$_$commands$permissions;
/**
 * @deprecated Use `$applications$_$guilds$_$commands$_$permissions` instead
 */
declare const _applications_$_guilds_$_commands_$_permissions: typeof $applications$_$guilds$_$commands$_$permissions;
declare const $applications$me: "/applications/@me";
declare const $applications$_$activityinstances$_: "/applications/{application.id}/activity-instances/{instance_id}";
/**
 * @deprecated Use `$applications$me` instead
 */
declare const _applications_me: typeof $applications$me;
/**
 * @deprecated Use `$applications$_$activityinstances$_` instead
 */
declare const _applications_$_activityinstances_$: typeof $applications$_$activityinstances$_;
declare const $applications$_$roleconnections$metadata: "/applications/{application.id}/role-connections/metadata";
/**
 * @deprecated Use `$applications$_$roleconnections$metadata` instead
 */
declare const _applications_$_roleconnections_metadata: typeof $applications$_$roleconnections$metadata;
declare const $guilds$_$auditlogs: "/guilds/{guild.id}/audit-logs";
/**
 * @deprecated Use `$guilds$_$auditlogs` instead
 */
declare const _guilds_$_auditlogs: typeof $guilds$_$auditlogs;
declare const $guilds$_$automoderation$rules: "/guilds/{guild.id}/auto-moderation/rules";
declare const $guilds$_$automoderation$rules$_: "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}";
/**
 * @deprecated Use `$guilds$_$automoderation$rules` instead
 */
declare const _guilds_$_automoderation_rules: typeof $guilds$_$automoderation$rules;
/**
 * @deprecated Use `$guilds$_$automoderation$rules$_` instead
 */
declare const _guilds_$_automoderation_rules_$: typeof $guilds$_$automoderation$rules$_;
declare const $channels$_: "/channels/{channel.id}";
declare const $channels$_$permissions$_: "/channels/{channel.id}/permissions/{overwrite.id}";
declare const $channels$_$invites: "/channels/{channel.id}/invites";
declare const $channels$_$followers: "/channels/{channel.id}/followers";
declare const $channels$_$typing: "/channels/{channel.id}/typing";
declare const $channels$_$pins: "/channels/{channel.id}/pins";
declare const $channels$_$pins$_: "/channels/{channel.id}/pins/{message.id}";
declare const $channels$_$recipients$_: "/channels/{channel.id}/recipients/{user.id}";
declare const $channels$_$messages$_$threads: "/channels/{channel.id}/messages/{message.id}/threads";
declare const $channels$_$threads: "/channels/{channel.id}/threads";
declare const $channels$_$threadmembers$me: "/channels/{channel.id}/thread-members/@me";
declare const $channels$_$threadmembers$_: "/channels/{channel.id}/thread-members/{user.id}";
declare const $channels$_$threadmembers: "/channels/{channel.id}/thread-members";
declare const $channels$_$threads$archived$public: "/channels/{channel.id}/threads/archived/public";
declare const $channels$_$threads$archived$private: "/channels/{channel.id}/threads/archived/private";
declare const $channels$_$users$me$threads$archived$private: "/channels/{channel.id}/users/@me/threads/archived/private";
/**
 * @deprecated Use `$channels$_` instead
 */
declare const _channels_$: typeof $channels$_;
/**
 * @deprecated Use `$channels$_$permissions$_` instead
 */
declare const _channels_$_permissions_$: typeof $channels$_$permissions$_;
/**
 * @deprecated Use `$channels$_$invites` instead
 */
declare const _channels_$_invites: typeof $channels$_$invites;
/**
 * @deprecated Use `$channels$_$followers` instead
 */
declare const _channels_$_followers: typeof $channels$_$followers;
/**
 * @deprecated Use `$channels$_$typing` instead
 */
declare const _channels_$_typing: typeof $channels$_$typing;
/**
 * @deprecated Use `$channels$_$pins` instead
 */
declare const _channels_$_pins: typeof $channels$_$pins;
/**
 * @deprecated Use `$channels$_$pins$_` instead
 */
declare const _channels_$_pins_$: typeof $channels$_$pins$_;
/**
 * @deprecated Use `$channels$_$recipients$_` instead
 */
declare const _channels_$_recipients_$: typeof $channels$_$recipients$_;
/**
 * @deprecated Use `$channels$_$messages$_$threads` instead
 */
declare const _channels_$_messages_$_threads: typeof $channels$_$messages$_$threads;
/**
 * @deprecated Use `$channels$_$threads` instead
 */
declare const _channels_$_threads: typeof $channels$_$threads;
/**
 * @deprecated Use `$channels$_$threadmembers$me` instead
 */
declare const _channels_$_threadmembers_me: typeof $channels$_$threadmembers$me;
/**
 * @deprecated Use `$channels$_$threadmembers$_` instead
 */
declare const _channels_$_threadmembers_$: typeof $channels$_$threadmembers$_;
/**
 * @deprecated Use `$channels$_$threadmembers` instead
 */
declare const _channels_$_threadmembers: typeof $channels$_$threadmembers;
/**
 * @deprecated Use `$channels$_$threads$archived$public` instead
 */
declare const _channels_$_threads_archived_public: typeof $channels$_$threads$archived$public;
/**
 * @deprecated Use `$channels$_$threads$archived$private` instead
 */
declare const _channels_$_threads_archived_private: typeof $channels$_$threads$archived$private;
/**
 * @deprecated Use `$channels$_$users$me$threads$archived$private` instead
 */
declare const _channels_$_users_me_threads_archived_private: typeof $channels$_$users$me$threads$archived$private;
declare const $guilds$_$emojis: "/guilds/{guild.id}/emojis";
declare const $guilds$_$emojis$_: "/guilds/{guild.id}/emojis/{emoji.id}";
declare const $applications$_$emojis: "/applications/{application.id}/emojis";
declare const $applications$_$emojis$_: "/applications/{application.id}/emojis/{emoji.id}";
/**
 * @deprecated Use `$guilds$_$emojis` instead
 */
declare const _guilds_$_emojis: typeof $guilds$_$emojis;
/**
 * @deprecated Use `$guilds$_$emojis$_` instead
 */
declare const _guilds_$_emojis_$: typeof $guilds$_$emojis$_;
/**
 * @deprecated Use `$applications$_$emojis` instead
 */
declare const _applications_$_emojis: typeof $applications$_$emojis;
/**
 * @deprecated Use `$applications$_$emojis$_` instead
 */
declare const _applications_$_emojis_$: typeof $applications$_$emojis$_;
declare const $applications$_$entitlements: "/applications/{application.id}/entitlements";
declare const $applications$_$entitlements$_: "/applications/{application.id}/entitlements/{entitlement.id}";
declare const $applications$_$entitlements$_$consume: "/applications/{application.id}/entitlements/{entitlement.id}/consume";
/**
 * @deprecated Use `$applications$_$entitlements` instead
 */
declare const _applications_$_entitlements: typeof $applications$_$entitlements;
/**
 * @deprecated Use `$applications$_$entitlements$_` instead
 */
declare const _applications_$_entitlements_$: typeof $applications$_$entitlements$_;
/**
 * @deprecated Use `$applications$_$entitlements$_$consume` instead
 */
declare const _applications_$_entitlements_$_consume: typeof $applications$_$entitlements$_$consume;
declare const $guilds: "/guilds";
declare const $guilds$_: "/guilds/{guild.id}";
declare const $guilds$_$preview: "/guilds/{guild.id}/preview";
declare const $guilds$_$channels: "/guilds/{guild.id}/channels";
declare const $guilds$_$threads$active: "/guilds/{guild.id}/threads/active";
declare const $guilds$_$members$_: "/guilds/{guild.id}/members/{user.id}";
declare const $guilds$_$members: "/guilds/{guild.id}/members";
declare const $guilds$_$members$search: "/guilds/{guild.id}/members/search";
declare const $guilds$_$members$me: "/guilds/{guild.id}/members/@me";
declare const $guilds$_$members$me$nick: "/guilds/{guild.id}/members/@me/nick";
declare const $guilds$_$members$_$roles$_: "/guilds/{guild.id}/members/{user.id}/roles/{role.id}";
declare const $guilds$_$bans: "/guilds/{guild.id}/bans";
declare const $guilds$_$bans$_: "/guilds/{guild.id}/bans/{user.id}";
declare const $guilds$_$bulkban: "/guilds/{guild.id}/bulk-ban";
declare const $guilds$_$roles: "/guilds/{guild.id}/roles";
declare const $guilds$_$roles$_: "/guilds/{guild.id}/roles/{role.id}";
declare const $guilds$_$mfa: "/guilds/{guild.id}/mfa";
declare const $guilds$_$prune: "/guilds/{guild.id}/prune";
declare const $guilds$_$regions: "/guilds/{guild.id}/regions";
declare const $guilds$_$invites: "/guilds/{guild.id}/invites";
declare const $guilds$_$integrations: "/guilds/{guild.id}/integrations";
declare const $guilds$_$integrations$_: "/guilds/{guild.id}/integrations/{integration.id}";
declare const $guilds$_$widget: "/guilds/{guild.id}/widget";
declare const $guilds$_$widgetjson: "/guilds/{guild.id}/widget.json";
declare const $guilds$_$vanityurl: "/guilds/{guild.id}/vanity-url";
declare const $guilds$_$widgetpng: "/guilds/{guild.id}/widget.png";
declare const $guilds$_$welcomescreen: "/guilds/{guild.id}/welcome-screen";
declare const $guilds$_$onboarding: "/guilds/{guild.id}/onboarding";
declare const $guilds$_$incidentactions: "/guilds/{guild.id}/incident-actions";
/**
 * @deprecated Use `$guilds` instead
 */
declare const _guilds: typeof $guilds;
/**
 * @deprecated Use `$guilds$_` instead
 */
declare const _guilds_$: typeof $guilds$_;
/**
 * @deprecated Use `$guilds$_$preview` instead
 */
declare const _guilds_$_preview: typeof $guilds$_$preview;
/**
 * @deprecated Use `$guilds$_$channels` instead
 */
declare const _guilds_$_channels: typeof $guilds$_$channels;
/**
 * @deprecated Use `$guilds$_$threads$active` instead
 */
declare const _guilds_$_threads_active: typeof $guilds$_$threads$active;
/**
 * @deprecated Use `$guilds$_$members$_` instead
 */
declare const _guilds_$_members_$: typeof $guilds$_$members$_;
/**
 * @deprecated Use `$guilds$_$members` instead
 */
declare const _guilds_$_members: typeof $guilds$_$members;
/**
 * @deprecated Use `$guilds$_$members$search` instead
 */
declare const _guilds_$_members_search: typeof $guilds$_$members$search;
/**
 * @deprecated Use `$guilds$_$members$me` instead
 */
declare const _guilds_$_members_me: typeof $guilds$_$members$me;
/**
 * @deprecated Use `$guilds$_$members$me$nick` instead
 */
declare const _guilds_$_members_me_nick: typeof $guilds$_$members$me$nick;
/**
 * @deprecated Use `$guilds$_$members$_$roles$_` instead
 */
declare const _guilds_$_members_$_roles_$: typeof $guilds$_$members$_$roles$_;
/**
 * @deprecated Use `$guilds$_$bans` instead
 */
declare const _guilds_$_bans: typeof $guilds$_$bans;
/**
 * @deprecated Use `$guilds$_$bans$_` instead
 */
declare const _guilds_$_bans_$: typeof $guilds$_$bans$_;
/**
 * @deprecated Use `$guilds$_$bulkban` instead
 */
declare const _guilds_$_bulkban: typeof $guilds$_$bulkban;
/**
 * @deprecated Use `$guilds$_$roles` instead
 */
declare const _guilds_$_roles: typeof $guilds$_$roles;
/**
 * @deprecated Use `$guilds$_$roles$_` instead
 */
declare const _guilds_$_roles_$: typeof $guilds$_$roles$_;
/**
 * @deprecated Use `$guilds$_$mfa` instead
 */
declare const _guilds_$_mfa: typeof $guilds$_$mfa;
/**
 * @deprecated Use `$guilds$_$prune` instead
 */
declare const _guilds_$_prune: typeof $guilds$_$prune;
/**
 * @deprecated Use `$guilds$_$regions` instead
 */
declare const _guilds_$_regions: typeof $guilds$_$regions;
/**
 * @deprecated Use `$guilds$_$invites` instead
 */
declare const _guilds_$_invites: typeof $guilds$_$invites;
/**
 * @deprecated Use `$guilds$_$integrations` instead
 */
declare const _guilds_$_integrations: typeof $guilds$_$integrations;
/**
 * @deprecated Use `$guilds$_$integrations$_` instead
 */
declare const _guilds_$_integrations_$: typeof $guilds$_$integrations$_;
/**
 * @deprecated Use `$guilds$_$widget` instead
 */
declare const _guilds_$_widget: typeof $guilds$_$widget;
/**
 * @deprecated Use `$guilds$_$widgetjson` instead
 */
declare const _guilds_$_widgetjson: typeof $guilds$_$widgetjson;
/**
 * @deprecated Use `$guilds$_$vanityurl` instead
 */
declare const _guilds_$_vanityurl: typeof $guilds$_$vanityurl;
/**
 * @deprecated Use `$guilds$_$widgetpng` instead
 */
declare const _guilds_$_widgetpng: typeof $guilds$_$widgetpng;
/**
 * @deprecated Use `$guilds$_$welcomescreen` instead
 */
declare const _guilds_$_welcomescreen: typeof $guilds$_$welcomescreen;
/**
 * @deprecated Use `$guilds$_$onboarding` instead
 */
declare const _guilds_$_onboarding: typeof $guilds$_$onboarding;
/**
 * @deprecated Use `$guilds$_$incidentactions` instead
 */
declare const _guilds_$_incidentactions: typeof $guilds$_$incidentactions;
declare const $guilds$_$scheduledevents: "/guilds/{guild.id}/scheduled-events";
declare const $guilds$_$scheduledevents$_: "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}";
declare const $guilds$_$scheduledevents$_$users: "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}/users";
/**
 * @deprecated Use `$guilds$_$scheduledevents` instead
 */
declare const _guilds_$_scheduledevents: typeof $guilds$_$scheduledevents;
/**
 * @deprecated Use `$guilds$_$scheduledevents$_` instead
 */
declare const _guilds_$_scheduledevents_$: typeof $guilds$_$scheduledevents$_;
/**
 * @deprecated Use `$guilds$_$scheduledevents$_$users` instead
 */
declare const _guilds_$_scheduledevents_$_users: typeof $guilds$_$scheduledevents$_$users;
declare const $guilds$templates$_: "/guilds/templates/{template.code}";
declare const $guilds$_$templates: "/guilds/{guild.id}/templates";
declare const $guilds$_$templates$_: "/guilds/{guild.id}/templates/{template.code}";
/**
 * @deprecated Use `$guilds$templates$_` instead
 */
declare const _guilds_templates_$: typeof $guilds$templates$_;
/**
 * @deprecated Use `$guilds$_$templates` instead
 */
declare const _guilds_$_templates: typeof $guilds$_$templates;
/**
 * @deprecated Use `$guilds$_$templates$_` instead
 */
declare const _guilds_$_templates_$: typeof $guilds$_$templates$_;
declare const $invites$_: "/invites/{invite.code}";
/**
 * @deprecated Use `$invites$_` instead
 */
declare const _invites_$: typeof $invites$_;
declare const $channels$_$messages: "/channels/{channel.id}/messages";
declare const $channels$_$messages$_: "/channels/{channel.id}/messages/{message.id}";
declare const $channels$_$messages$_$crosspost: "/channels/{channel.id}/messages/{message.id}/crosspost";
declare const $channels$_$messages$_$reactions$_$me: "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me";
declare const $channels$_$messages$_$reactions$_$_: "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}";
declare const $channels$_$messages$_$reactions$_: "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}";
declare const $channels$_$messages$_$reactions: "/channels/{channel.id}/messages/{message.id}/reactions";
declare const $channels$_$messages$bulkdelete: "/channels/{channel.id}/messages/bulk-delete";
/**
 * @deprecated Use `$channels$_$messages` instead
 */
declare const _channels_$_messages: typeof $channels$_$messages;
/**
 * @deprecated Use `$channels$_$messages$_` instead
 */
declare const _channels_$_messages_$: typeof $channels$_$messages$_;
/**
 * @deprecated Use `$channels$_$messages$_$crosspost` instead
 */
declare const _channels_$_messages_$_crosspost: typeof $channels$_$messages$_$crosspost;
/**
 * @deprecated Use `$channels$_$messages$_$reactions$_$me` instead
 */
declare const _channels_$_messages_$_reactions_$_me: typeof $channels$_$messages$_$reactions$_$me;
/**
 * @deprecated Use `$channels$_$messages$_$reactions$_$_` instead
 */
declare const _channels_$_messages_$_reactions_$_$: typeof $channels$_$messages$_$reactions$_$_;
/**
 * @deprecated Use `$channels$_$messages$_$reactions$_` instead
 */
declare const _channels_$_messages_$_reactions_$: typeof $channels$_$messages$_$reactions$_;
/**
 * @deprecated Use `$channels$_$messages$_$reactions` instead
 */
declare const _channels_$_messages_$_reactions: typeof $channels$_$messages$_$reactions;
/**
 * @deprecated Use `$channels$_$messages$bulkdelete` instead
 */
declare const _channels_$_messages_bulkdelete: typeof $channels$_$messages$bulkdelete;
declare const $channels$_$polls$_$answers$_: "/channels/{channel.id}/polls/{message.id}/answers/{answer_id}";
declare const $channels$_$polls$_$expire: "/channels/{channel.id}/polls/{message.id}/expire";
/**
 * @deprecated Use `$channels$_$polls$_$answers$_` instead
 */
declare const _channels_$_polls_$_answers_$: typeof $channels$_$polls$_$answers$_;
/**
 * @deprecated Use `$channels$_$polls$_$expire` instead
 */
declare const _channels_$_polls_$_expire: typeof $channels$_$polls$_$expire;
declare const $applications$_$skus: "/applications/{application.id}/skus";
/**
 * @deprecated Use `$applications$_$skus` instead
 */
declare const _applications_$_skus: typeof $applications$_$skus;
declare const $channels$_$sendsoundboardsound: "/channels/{channel.id}/send-soundboard-sound";
declare const $soundboarddefaultsounds: "/soundboard-default-sounds";
declare const $guilds$_$soundboardsounds: "/guilds/{guild.id}/soundboard-sounds";
declare const $guilds$_$soundboardsounds$_: "/guilds/{guild.id}/soundboard-sounds/{sound.id}";
/**
 * @deprecated Use `$channels$_$sendsoundboardsound` instead
 */
declare const _channels_$_sendsoundboardsound: typeof $channels$_$sendsoundboardsound;
/**
 * @deprecated Use `$soundboarddefaultsounds` instead
 */
declare const _soundboarddefaultsounds: typeof $soundboarddefaultsounds;
/**
 * @deprecated Use `$guilds$_$soundboardsounds` instead
 */
declare const _guilds_$_soundboardsounds: typeof $guilds$_$soundboardsounds;
/**
 * @deprecated Use `$guilds$_$soundboardsounds$_` instead
 */
declare const _guilds_$_soundboardsounds_$: typeof $guilds$_$soundboardsounds$_;
declare const $stageinstances: "/stage-instances";
declare const $stageinstances$_: "/stage-instances/{channel.id}";
/**
 * @deprecated Use `$stageinstances` instead
 */
declare const _stageinstances: typeof $stageinstances;
/**
 * @deprecated Use `$stageinstances$_` instead
 */
declare const _stageinstances_$: typeof $stageinstances$_;
declare const $stickers$_: "/stickers/{sticker.id}";
declare const $stickerpacks: "/sticker-packs";
declare const $stickerpacks$_: "/sticker-packs/{pack.id}";
declare const $guilds$_$stickers: "/guilds/{guild.id}/stickers";
declare const $guilds$_$stickers$_: "/guilds/{guild.id}/stickers/{sticker.id}";
/**
 * @deprecated Use `$stickers$_` instead
 */
declare const _stickers_$: typeof $stickers$_;
/**
 * @deprecated Use `$stickerpacks` instead
 */
declare const _stickerpacks: typeof $stickerpacks;
/**
 * @deprecated Use `$stickerpacks$_` instead
 */
declare const _stickerpacks_$: typeof $stickerpacks$_;
/**
 * @deprecated Use `$guilds$_$stickers` instead
 */
declare const _guilds_$_stickers: typeof $guilds$_$stickers;
/**
 * @deprecated Use `$guilds$_$stickers$_` instead
 */
declare const _guilds_$_stickers_$: typeof $guilds$_$stickers$_;
declare const $skus$_$subscriptions: "/skus/{sku.id}/subscriptions";
declare const $skus$_$subscriptions$_: "/skus/{sku.id}/subscriptions/{subscription.id}";
/**
 * @deprecated Use `$skus$_$subscriptions` instead
 */
declare const _skus_$_subscriptions: typeof $skus$_$subscriptions;
/**
 * @deprecated Use `$skus$_$subscriptions$_` instead
 */
declare const _skus_$_subscriptions_$: typeof $skus$_$subscriptions$_;
declare const $users$me: "/users/@me";
declare const $users$_: "/users/{user.id}";
declare const $users$me$guilds: "/users/@me/guilds";
declare const $users$me$guilds$_$member: "/users/@me/guilds/{guild.id}/member";
declare const $users$me$guilds$_: "/users/@me/guilds/{guild.id}";
declare const $users$me$channels: "/users/@me/channels";
declare const $users$me$connections: "/users/@me/connections";
declare const $users$me$applications$_$roleconnection: "/users/@me/applications/{application.id}/role-connection";
/**
 * @deprecated Use `$users$me` instead
 */
declare const _users_me: typeof $users$me;
/**
 * @deprecated Use `$users$_` instead
 */
declare const _users_$: typeof $users$_;
/**
 * @deprecated Use `$users$me$guilds` instead
 */
declare const _users_me_guilds: typeof $users$me$guilds;
/**
 * @deprecated Use `$users$me$guilds$_$member` instead
 */
declare const _users_me_guilds_$_member: typeof $users$me$guilds$_$member;
/**
 * @deprecated Use `$users$me$guilds$_` instead
 */
declare const _users_me_guilds_$: typeof $users$me$guilds$_;
/**
 * @deprecated Use `$users$me$channels` instead
 */
declare const _users_me_channels: typeof $users$me$channels;
/**
 * @deprecated Use `$users$me$connections` instead
 */
declare const _users_me_connections: typeof $users$me$connections;
/**
 * @deprecated Use `$users$me$applications$_$roleconnection` instead
 */
declare const _users_me_applications_$_roleconnection: typeof $users$me$applications$_$roleconnection;
declare const $voice$regions: "/voice/regions";
declare const $guilds$_$voicestates$me: "/guilds/{guild.id}/voice-states/@me";
declare const $guilds$_$voicestates$_: "/guilds/{guild.id}/voice-states/{user.id}";
/**
 * @deprecated Use `$voice$regions` instead
 */
declare const _voice_regions: typeof $voice$regions;
/**
 * @deprecated Use `$guilds$_$voicestates$me` instead
 */
declare const _guilds_$_voicestates_me: typeof $guilds$_$voicestates$me;
/**
 * @deprecated Use `$guilds$_$voicestates$_` instead
 */
declare const _guilds_$_voicestates_$: typeof $guilds$_$voicestates$_;
declare const $channels$_$webhooks: "/channels/{channel.id}/webhooks";
declare const $guilds$_$webhooks: "/guilds/{guild.id}/webhooks";
declare const $webhooks$_: "/webhooks/{webhook.id}";
declare const $webhooks$_$_$slack: "/webhooks/{webhook.id}/{webhook.token}/slack";
declare const $webhooks$_$_$github: "/webhooks/{webhook.id}/{webhook.token}/github";
/**
 * @deprecated Use `$channels$_$webhooks` instead
 */
declare const _channels_$_webhooks: typeof $channels$_$webhooks;
/**
 * @deprecated Use `$guilds$_$webhooks` instead
 */
declare const _guilds_$_webhooks: typeof $guilds$_$webhooks;
/**
 * @deprecated Use `$webhooks$_` instead
 */
declare const _webhooks_$: typeof $webhooks$_;
/**
 * @deprecated Use `$webhooks$_$_$slack` instead
 */
declare const _webhooks_$_$_slack: typeof $webhooks$_$_$slack;
/**
 * @deprecated Use `$webhooks$_$_$github` instead
 */
declare const _webhooks_$_$_github: typeof $webhooks$_$_$github;

type CouldNotFind = Record<string, unknown>;
type RestMethod = 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE';
type RestPathNV<M extends RestMethod> = M extends 'GET' ? typeof $applications$me | typeof $soundboarddefaultsounds | typeof $stickerpacks | typeof $users$me | typeof $users$me$connections | typeof $users$me$guilds | typeof $voice$regions : never;
type RestPathVars<M extends RestMethod> = M extends 'GET' ? typeof $webhooks$_$_$messages$original | typeof $webhooks$_$_$messages$_ | typeof $applications$_$commands | typeof $applications$_$commands$_ | typeof $applications$_$guilds$_$commands | typeof $applications$_$guilds$_$commands$_ | typeof $applications$_$guilds$_$commands$permissions | typeof $applications$_$guilds$_$commands$_$permissions | typeof $applications$_$activityinstances$_ | typeof $applications$_$roleconnections$metadata | typeof $guilds$_$auditlogs | typeof $guilds$_$automoderation$rules | typeof $guilds$_$automoderation$rules$_ | typeof $channels$_ | typeof $channels$_$invites | typeof $channels$_$pins | typeof $channels$_$threadmembers$_ | typeof $channels$_$threadmembers | typeof $channels$_$threads$archived$public | typeof $channels$_$threads$archived$private | typeof $channels$_$users$me$threads$archived$private | typeof $guilds$_$emojis | typeof $guilds$_$emojis$_ | typeof $applications$_$emojis | typeof $applications$_$emojis$_ | typeof $applications$_$entitlements | typeof $applications$_$entitlements$_ | typeof $guilds$_ | typeof $guilds$_$members | typeof $guilds$_$bans | typeof $guilds$_$prune | typeof $guilds$_$widgetpng | typeof $guilds$_$preview | typeof $guilds$_$channels | typeof $guilds$_$threads$active | typeof $guilds$_$members$_ | typeof $guilds$_$bans$_ | typeof $guilds$_$roles | typeof $guilds$_$roles$_ | typeof $guilds$_$regions | typeof $guilds$_$invites | typeof $guilds$_$integrations | typeof $guilds$_$widget | typeof $guilds$_$widgetjson | typeof $guilds$_$vanityurl | typeof $guilds$_$welcomescreen | typeof $guilds$_$onboarding | typeof $guilds$_$scheduledevents | typeof $guilds$_$scheduledevents$_ | typeof $guilds$_$scheduledevents$_$users | typeof $guilds$templates$_ | typeof $guilds$_$templates | typeof $invites$_ | typeof $channels$_$messages | typeof $channels$_$messages$_ | typeof $channels$_$messages$_$reactions$_ | typeof $channels$_$polls$_$answers$_ | typeof $applications$_$skus | typeof $guilds$_$soundboardsounds | typeof $guilds$_$soundboardsounds$_ | typeof $stageinstances$_ | typeof $stickers$_ | typeof $stickerpacks$_ | typeof $guilds$_$stickers | typeof $guilds$_$stickers$_ | typeof $skus$_$subscriptions | typeof $skus$_$subscriptions$_ | typeof $users$_ | typeof $users$me$guilds$_$member | typeof $users$me$applications$_$roleconnection | typeof $guilds$_$voicestates$me | typeof $guilds$_$voicestates$_ | typeof $channels$_$webhooks | typeof $guilds$_$webhooks | typeof $webhooks$_ | typeof $webhooks$_$_ : M extends 'PUT' ? typeof $channels$_$pins$_ | typeof $channels$_$threadmembers$me | typeof $channels$_$threadmembers$_ | typeof $guilds$_$members$_$roles$_ | typeof $guilds$_$templates$_ | typeof $channels$_$messages$_$reactions$_$me : M extends 'POST' ? typeof $channels$_$typing | typeof $applications$_$entitlements$_$consume | typeof $channels$_$messages$_$crosspost | typeof $channels$_$polls$_$expire : M extends 'PATCH' ? typeof $webhooks$_$_$messages$_ : M extends 'DELETE' ? typeof $webhooks$_$_$messages$original | typeof $webhooks$_$_$messages$_ | typeof $applications$_$commands$_ | typeof $applications$_$guilds$_$commands$_ | typeof $guilds$_$automoderation$rules$_ | typeof $channels$_ | typeof $channels$_$permissions$_ | typeof $channels$_$pins$_ | typeof $channels$_$recipients$_ | typeof $channels$_$threadmembers$me | typeof $channels$_$threadmembers$_ | typeof $guilds$_$emojis$_ | typeof $applications$_$emojis$_ | typeof $applications$_$entitlements$_ | typeof $guilds$_ | typeof $guilds$_$members$_$roles$_ | typeof $guilds$_$members$_ | typeof $guilds$_$bans$_ | typeof $guilds$_$roles$_ | typeof $guilds$_$integrations$_ | typeof $guilds$_$scheduledevents$_ | typeof $guilds$_$templates$_ | typeof $invites$_ | typeof $channels$_$messages$_$reactions$_$me | typeof $channels$_$messages$_$reactions$_$_ | typeof $channels$_$messages$_$reactions | typeof $channels$_$messages$_$reactions$_ | typeof $channels$_$messages$_ | typeof $guilds$_$soundboardsounds$_ | typeof $stageinstances$_ | typeof $guilds$_$stickers$_ | typeof $users$me$guilds$_ | typeof $webhooks$_ | typeof $webhooks$_$_ | typeof $webhooks$_$_$messages$_ : never;
type RestPathVarsQueryRequired<M extends RestMethod> = M extends 'GET' ? typeof $guilds$_$members$search : never;
type RestPathVarsData<M extends RestMethod> = M extends 'PUT' ? typeof $applications$_$commands | typeof $applications$_$guilds$_$commands | typeof $applications$_$guilds$_$commands$_$permissions | typeof $applications$_$guilds$_$commands$permissions | typeof $applications$_$roleconnections$metadata | typeof $channels$_$permissions$_ | typeof $channels$_$recipients$_ | typeof $guilds$_$members$_ | typeof $guilds$_$bans$_ | typeof $guilds$_$onboarding | typeof $guilds$_$incidentactions | typeof $users$me$applications$_$roleconnection : M extends 'POST' ? typeof $applications$_$commands | typeof $applications$_$guilds$_$commands | typeof $guilds$_$automoderation$rules | typeof $channels$_$invites | typeof $channels$_$followers | typeof $channels$_$messages$_$threads | typeof $channels$_$threads | typeof $guilds$_$emojis | typeof $applications$_$emojis | typeof $applications$_$entitlements | typeof $guilds | typeof $guilds$_$channels | typeof $guilds$_$bulkban | typeof $guilds$_$roles | typeof $guilds$_$roles$_ | typeof $guilds$_$mfa | typeof $guilds$_$prune | typeof $guilds$_$scheduledevents | typeof $guilds$templates$_ | typeof $guilds$_$templates | typeof $channels$_$messages$bulkdelete | typeof $channels$_$sendsoundboardsound | typeof $guilds$_$soundboardsounds | typeof $stageinstances | typeof $users$me$channels | typeof $channels$_$webhooks | typeof $webhooks$_$_ | typeof $webhooks$_$_$slack | typeof $webhooks$_$_$github : M extends 'PATCH' ? typeof $applications$_$commands$_ | typeof $applications$_$guilds$_$commands$_ | typeof $applications$me | typeof $guilds$_$automoderation$rules$_ | typeof $channels$_ | typeof $guilds$_$emojis$_ | typeof $applications$_$emojis$_ | typeof $guilds$_ | typeof $guilds$_$channels | typeof $guilds$_$members$_ | typeof $guilds$_$members$me | typeof $guilds$_$members$me$nick | typeof $guilds$_$roles | typeof $guilds$_$widget | typeof $guilds$_$welcomescreen | typeof $guilds$_$scheduledevents$_ | typeof $guilds$_$templates$_ | typeof $guilds$_$soundboardsounds$_ | typeof $stageinstances$_ | typeof $guilds$_$stickers$_ | typeof $users$me | typeof $guilds$_$voicestates$me | typeof $guilds$_$voicestates$_ | typeof $webhooks$_ | typeof $webhooks$_$_ : never;
type RestPathVarsDataFile<M extends RestMethod> = M extends 'POST' ? typeof $interactions$_$_$callback | typeof $webhooks$_$_ | typeof $channels$_$threads | typeof $channels$_$messages : M extends 'PATCH' ? typeof $webhooks$_$_$messages$original | typeof $webhooks$_$_$messages$_ | typeof $channels$_$messages$_ | typeof $webhooks$_$_$messages$_ : never;
type RestPath<M extends RestMethod> = RestPathNV<M> | RestPathVars<M> | RestPathVarsQueryRequired<M> | RestPathVarsData<M> | RestPathVarsDataFile<M>;
type RestVariables<P extends RestPath<any>> = P extends typeof $applications$me | typeof $guilds | typeof $soundboarddefaultsounds | typeof $stageinstances | typeof $stickerpacks | typeof $users$me | typeof $users$me$guilds | typeof $users$me$channels | typeof $users$me$connections | typeof $voice$regions ? [] : P extends typeof $applications$_$commands | typeof $applications$_$roleconnections$metadata | typeof $guilds$_$auditlogs | typeof $guilds$_$automoderation$rules | typeof $channels$_ | typeof $channels$_$invites | typeof $channels$_$followers | typeof $channels$_$typing | typeof $channels$_$pins | typeof $channels$_$threads | typeof $channels$_$threadmembers$me | typeof $channels$_$threadmembers | typeof $channels$_$threads$archived$public | typeof $channels$_$threads$archived$private | typeof $channels$_$users$me$threads$archived$private | typeof $channels$_$messages | typeof $channels$_$messages$bulkdelete | typeof $guilds$_$emojis | typeof $applications$_$emojis | typeof $applications$_$entitlements | typeof $guilds$_ | typeof $guilds$_$preview | typeof $guilds$_$channels | typeof $guilds$_$threads$active | typeof $guilds$_$members | typeof $guilds$_$members$search | typeof $guilds$_$members$me | typeof $guilds$_$members$me$nick | typeof $guilds$_$bans | typeof $guilds$_$bulkban | typeof $guilds$_$roles | typeof $guilds$_$mfa | typeof $guilds$_$prune | typeof $guilds$_$regions | typeof $guilds$_$invites | typeof $guilds$_$integrations | typeof $guilds$_$widget | typeof $guilds$_$widgetjson | typeof $guilds$_$vanityurl | typeof $guilds$_$widgetpng | typeof $guilds$_$welcomescreen | typeof $guilds$_$onboarding | typeof $guilds$_$incidentactions | typeof $guilds$_$scheduledevents | typeof $guilds$templates$_ | typeof $guilds$_$templates | typeof $invites$_ | typeof $applications$_$skus | typeof $channels$_$sendsoundboardsound | typeof $guilds$_$soundboardsounds | typeof $stageinstances$_ | typeof $stickers$_ | typeof $stickerpacks$_ | typeof $guilds$_$stickers | typeof $skus$_$subscriptions | typeof $users$_ | typeof $users$me$guilds$_$member | typeof $users$me$guilds$_ | typeof $users$me$applications$_$roleconnection | typeof $guilds$_$voicestates$me | typeof $channels$_$webhooks | typeof $guilds$_$webhooks | typeof $webhooks$_ ? [string] : P extends typeof $interactions$_$_$callback | typeof $webhooks$_$_$messages$original | typeof $webhooks$_$_ | typeof $applications$_$commands$_ | typeof $applications$_$guilds$_$commands | typeof $applications$_$guilds$_$commands$permissions | typeof $applications$_$activityinstances$_ | typeof $guilds$_$automoderation$rules$_ | typeof $channels$_$permissions$_ | typeof $channels$_$pins$_ | typeof $channels$_$recipients$_ | typeof $channels$_$messages$_$threads | typeof $channels$_$threadmembers$_ | typeof $channels$_$messages$_ | typeof $channels$_$messages$_$crosspost | typeof $channels$_$messages$_$reactions | typeof $guilds$_$emojis$_ | typeof $applications$_$emojis$_ | typeof $applications$_$entitlements$_ | typeof $applications$_$entitlements$_$consume | typeof $guilds$_$members$_ | typeof $guilds$_$bans$_ | typeof $guilds$_$roles$_ | typeof $guilds$_$integrations$_ | typeof $guilds$_$scheduledevents$_ | typeof $guilds$_$scheduledevents$_$users | typeof $guilds$_$templates$_ | typeof $channels$_$polls$_$expire | typeof $guilds$_$soundboardsounds$_ | typeof $guilds$_$stickers$_ | typeof $skus$_$subscriptions$_ | typeof $guilds$_$voicestates$_ | typeof $webhooks$_$_$slack | typeof $webhooks$_$_$github ? [string, string] : P extends typeof $webhooks$_$_$messages$_ | typeof $applications$_$guilds$_$commands$_ | typeof $applications$_$guilds$_$commands$_$permissions | typeof $guilds$_$members$_$roles$_ | typeof $channels$_$messages$_$reactions$_$me | typeof $channels$_$messages$_$reactions$_ | typeof $channels$_$polls$_$answers$_ ? [string, string, string] : P extends typeof $channels$_$messages$_$reactions$_$_ ? [string, string, string, string] : string[];
type RestQuery<M extends RestMethod, P extends RestPath<M>> = M extends 'GET' ? P extends typeof $webhooks$_$_$messages$original ? RESTGetAPIWebhookWithTokenMessageQuery : P extends typeof $webhooks$_$_$messages$_ ? RESTGetAPIWebhookWithTokenMessageQuery : P extends typeof $applications$_$commands ? RESTGetAPIApplicationCommandsQuery : P extends typeof $applications$_$guilds$_$commands ? RESTGetAPIApplicationGuildCommandsQuery : P extends typeof $guilds$_$auditlogs ? RESTGetAPIAuditLogQuery : P extends typeof $channels$_$threadmembers$_ ? RESTGetAPIChannelThreadMemberQuery : P extends typeof $channels$_$threadmembers ? RESTGetAPIChannelThreadMembersQuery : P extends typeof $channels$_$threads$archived$public ? CouldNotFind : P extends typeof $channels$_$threads$archived$private ? CouldNotFind : P extends typeof $channels$_$users$me$threads$archived$private ? CouldNotFind : P extends typeof $applications$_$entitlements ? RESTGetAPIEntitlementsQuery : P extends typeof $guilds$_ ? RESTGetAPIGuildQuery : P extends typeof $guilds$_$members ? RESTGetAPIGuildMembersQuery : P extends typeof $guilds$_$members$search ? RESTGetAPIGuildMembersSearchQuery : P extends typeof $guilds$_$bans ? RESTGetAPIGuildBansQuery : P extends typeof $guilds$_$prune ? RESTGetAPIGuildPruneCountQuery : P extends typeof $guilds$_$widgetpng ? RESTGetAPIGuildWidgetImageQuery : P extends typeof $guilds$_$scheduledevents ? RESTGetAPIGuildScheduledEventsQuery : P extends typeof $guilds$_$scheduledevents$_ ? RESTGetAPIGuildScheduledEventQuery : P extends typeof $guilds$_$scheduledevents$_$users ? RESTGetAPIGuildScheduledEventUsersQuery : P extends typeof $invites$_ ? RESTGetAPIInviteQuery : P extends typeof $channels$_$messages ? RESTGetAPIChannelMessagesQuery : P extends typeof $channels$_$messages$_$reactions$_ ? RESTGetAPIChannelMessageReactionUsersQuery : P extends typeof $channels$_$polls$_$answers$_ ? RESTGetAPIPollAnswerVotersQuery : P extends typeof $skus$_$subscriptions ? RESTGetAPISKUSubscriptionsQuery : P extends typeof $users$me$guilds ? RESTGetAPICurrentUserGuildsQuery : never : M extends 'POST' ? P extends typeof $webhooks$_$_ ? RESTPostAPIWebhookWithTokenQuery : P extends typeof $interactions$_$_$callback ? RESTPostAPIInteractionCallbackQuery : P extends typeof $webhooks$_$_$slack ? RESTPostAPIWebhookWithTokenSlackQuery : P extends typeof $webhooks$_$_$github ? RESTPostAPIWebhookWithTokenGitHubQuery : never : never;
type RestData<M extends RestMethod, P extends RestPath<M>> = M extends 'PUT' ? P extends typeof $applications$_$commands ? RESTPutAPIApplicationCommandsJSONBody : P extends typeof $applications$_$guilds$_$commands ? RESTPutAPIApplicationGuildCommandsJSONBody : P extends typeof $applications$_$guilds$_$commands$_$permissions ? RESTPutAPIApplicationCommandPermissionsJSONBody : P extends typeof $applications$_$guilds$_$commands$permissions ? RESTPutAPIGuildApplicationCommandsPermissionsJSONBody : P extends typeof $applications$_$roleconnections$metadata ? RESTPutAPIApplicationRoleConnectionMetadataJSONBody : P extends typeof $channels$_$permissions$_ ? RESTPutAPIChannelPermissionJSONBody : P extends typeof $channels$_$recipients$_ ? RESTPutAPIChannelRecipientJSONBody : P extends typeof $guilds$_$members$_ ? RESTPutAPIGuildMemberJSONBody : P extends typeof $guilds$_$bans$_ ? RESTPutAPIGuildBanJSONBody : P extends typeof $guilds$_$onboarding ? RESTPutAPIGuildOnboardingJSONBody : P extends typeof $guilds$_$incidentactions ? RESTPutAPIGuildIncidentActionsJSONBody : P extends typeof $users$me$applications$_$roleconnection ? RESTPutAPICurrentUserApplicationRoleConnectionJSONBody : never : M extends 'POST' ? P extends typeof $webhooks$_$_ ? CustomCallbackData<RESTPostAPIInteractionFollowupJSONBody> | CustomCallbackData<RESTPostAPIWebhookWithTokenJSONBody> | undefined : P extends typeof $interactions$_$_$callback ? APIInteractionResponse : P extends typeof $applications$_$commands ? RESTPostAPIApplicationCommandsJSONBody : P extends typeof $applications$_$guilds$_$commands ? RESTPostAPIApplicationGuildCommandsJSONBody : P extends typeof $guilds$_$automoderation$rules ? RESTPostAPIAutoModerationRuleJSONBody : P extends typeof $channels$_$invites ? RESTPostAPIChannelInviteJSONBody : P extends typeof $channels$_$followers ? RESTPostAPIChannelFollowersJSONBody : P extends typeof $channels$_$messages$_$threads ? RESTPostAPIChannelMessagesThreadsJSONBody : P extends typeof $channels$_$threads ? RESTPostAPIChannelThreadsJSONBody | undefined | CouldNotFind : P extends typeof $guilds$_$emojis ? RESTPostAPIGuildEmojiJSONBody : P extends typeof $applications$_$emojis ? RESTPostAPIApplicationEmojiJSONBody : P extends typeof $applications$_$entitlements ? RESTPostAPIEntitlementJSONBody : P extends typeof $guilds ? RESTPostAPIGuildsJSONBody : P extends typeof $guilds$_$channels ? RESTPostAPIGuildChannelJSONBody : P extends typeof $guilds$_$bulkban ? RESTPostAPIGuildBulkBanJSONBody : P extends typeof $guilds$_$roles ? RESTPostAPIGuildRoleJSONBody : P extends typeof $guilds$_$mfa ? RESTPostAPIGuildsMFAJSONBody : P extends typeof $guilds$_$prune ? RESTPostAPIGuildPruneJSONBody : P extends typeof $guilds$_$scheduledevents ? RESTPostAPIGuildScheduledEventJSONBody : P extends typeof $guilds$templates$_ ? RESTPostAPITemplateCreateGuildJSONBody : P extends typeof $guilds$_$templates ? RESTPostAPIGuildTemplatesJSONBody : P extends typeof $channels$_$messages ? CustomCallbackData<RESTPostAPIChannelMessageJSONBody> | undefined : P extends typeof $channels$_$messages$bulkdelete ? RESTPostAPIChannelMessagesBulkDeleteJSONBody : P extends typeof $channels$_$sendsoundboardsound ? RESTPostAPISoundboardSendSoundJSONBody : P extends typeof $guilds$_$soundboardsounds ? RESTPostAPIGuildSoundboardSoundJSONBody : P extends typeof $stageinstances ? RESTPostAPIStageInstanceJSONBody : P extends typeof $users$me$channels ? RESTPostAPICurrentUserCreateDMChannelJSONBody | CouldNotFind : P extends typeof $channels$_$webhooks ? RESTPostAPIChannelWebhookJSONBody : never : M extends 'PATCH' ? P extends typeof $webhooks$_$_$messages$_ ? CustomCallbackData<RESTPatchAPIInteractionFollowupJSONBody> | CustomCallbackData<RESTPatchAPIWebhookWithTokenMessageJSONBody> | undefined : P extends typeof $webhooks$_$_$messages$original ? CustomCallbackData<RESTPatchAPIInteractionOriginalResponseJSONBody> | undefined : P extends typeof $applications$_$commands$_ ? RESTPatchAPIApplicationCommandJSONBody : P extends typeof $applications$_$guilds$_$commands$_ ? RESTPatchAPIApplicationGuildCommandJSONBody : P extends typeof $applications$me ? RESTPatchCurrentApplicationJSONBody : P extends typeof $guilds$_$automoderation$rules$_ ? RESTPatchAPIAutoModerationRuleJSONBody : P extends typeof $channels$_ ? RESTPatchAPIChannelJSONBody : P extends typeof $guilds$_$emojis$_ ? RESTPatchAPIGuildEmojiJSONBody : P extends typeof $applications$_$emojis$_ ? RESTPatchAPIApplicationEmojiJSONBody : P extends typeof $guilds$_ ? RESTPatchAPIGuildJSONBody : P extends typeof $guilds$_$channels ? RESTPatchAPIGuildChannelPositionsJSONBody : P extends typeof $guilds$_$members$_ ? RESTPatchAPIGuildMemberJSONBody : P extends typeof $guilds$_$members$me ? RESTPatchAPICurrentGuildMemberJSONBody : P extends typeof $guilds$_$members$me$nick ? RESTPatchAPICurrentGuildMemberNicknameJSONBody : P extends typeof $guilds$_$roles ? RESTPatchAPIGuildRolePositionsJSONBody : P extends typeof $guilds$_$roles$_ ? RESTPatchAPIGuildRoleJSONBody : P extends typeof $guilds$_$widget ? RESTPatchAPIGuildWidgetSettingsJSONBody : P extends typeof $guilds$_$welcomescreen ? RESTPatchAPIGuildWelcomeScreenJSONBody : P extends typeof $guilds$_$scheduledevents$_ ? RESTPatchAPIGuildScheduledEventJSONBody : P extends typeof $guilds$_$templates$_ ? RESTPatchAPIGuildTemplateJSONBody : P extends typeof $channels$_$messages$_ ? CustomCallbackData<RESTPatchAPIChannelMessageJSONBody> | undefined : P extends typeof $guilds$_$soundboardsounds$_ ? RESTPatchAPIGuildSoundboardSoundJSONBody : P extends typeof $stageinstances$_ ? RESTPatchAPIStageInstanceJSONBody : P extends typeof $guilds$_$stickers$_ ? RESTPatchAPIGuildStickerJSONBody : P extends typeof $users$me ? RESTPatchAPICurrentUserJSONBody : P extends typeof $guilds$_$voicestates$me ? RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody : P extends typeof $guilds$_$voicestates$_ ? RESTPatchAPIGuildVoiceStateUserJSONBody : P extends typeof $webhooks$_ ? RESTPatchAPIWebhookJSONBody : P extends typeof $webhooks$_$_ ? RESTPatchAPIWebhookWithTokenJSONBody : never : never;
type RestFile<M extends RestMethod, P extends RestPath<M>> = M extends 'POST' ? P extends typeof $interactions$_$_$callback | typeof $webhooks$_$_ | typeof $channels$_$threads | typeof $channels$_$messages ? FileData : never : M extends 'PATCH' ? P extends typeof $webhooks$_$_$messages$original | typeof $webhooks$_$_$messages$_ | typeof $channels$_$messages$_ ? FileData : never : never;
type RestResult<M extends RestMethod, P extends RestPath<M>> = M extends 'GET' ? P extends typeof $webhooks$_$_$messages$original ? RESTGetAPIInteractionOriginalResponseResult : P extends typeof $webhooks$_$_$messages$_ ? RESTGetAPIInteractionFollowupResult | RESTGetAPIWebhookWithTokenMessageResult : P extends typeof $applications$_$commands ? RESTGetAPIApplicationCommandsResult : P extends typeof $applications$_$commands$_ ? RESTGetAPIApplicationCommandResult : P extends typeof $applications$_$guilds$_$commands ? RESTGetAPIApplicationGuildCommandsResult : P extends typeof $applications$_$guilds$_$commands$_ ? RESTGetAPIApplicationGuildCommandResult : P extends typeof $applications$_$guilds$_$commands$permissions ? RESTGetAPIGuildApplicationCommandsPermissionsResult : P extends typeof $applications$_$guilds$_$commands$_$permissions ? RESTGetAPIApplicationCommandPermissionsResult : P extends typeof $applications$me ? RESTGetCurrentApplicationResult : P extends typeof $applications$_$activityinstances$_ ? CouldNotFind : P extends typeof $applications$_$roleconnections$metadata ? RESTGetAPIApplicationRoleConnectionMetadataResult : P extends typeof $guilds$_$auditlogs ? RESTGetAPIAuditLogResult : P extends typeof $guilds$_$automoderation$rules ? RESTGetAPIAutoModerationRulesResult : P extends typeof $guilds$_$automoderation$rules$_ ? RESTGetAPIAutoModerationRuleResult : P extends typeof $channels$_ ? RESTGetAPIChannelResult : P extends typeof $channels$_$invites ? RESTGetAPIChannelInvitesResult : P extends typeof $channels$_$pins ? RESTGetAPIChannelPinsResult : P extends typeof $channels$_$threadmembers$_ ? RESTGetAPIChannelThreadMemberResult : P extends typeof $channels$_$threadmembers ? RESTGetAPIChannelThreadMembersResult : P extends typeof $channels$_$threads$archived$public ? RESTGetAPIChannelThreadsArchivedPublicResult : P extends typeof $channels$_$threads$archived$private ? RESTGetAPIChannelThreadsArchivedPrivateResult : P extends typeof $channels$_$users$me$threads$archived$private ? CouldNotFind : P extends typeof $guilds$_$emojis ? RESTGetAPIGuildEmojisResult : P extends typeof $guilds$_$emojis$_ ? RESTGetAPIGuildEmojiResult : P extends typeof $applications$_$emojis ? RESTGetAPIApplicationEmojisResult : P extends typeof $applications$_$emojis$_ ? RESTGetAPIApplicationEmojiResult : P extends typeof $applications$_$entitlements ? RESTGetAPIEntitlementsResult : P extends typeof $applications$_$entitlements$_ ? RESTGetAPIEntitlementResult : P extends typeof $guilds$_ ? RESTGetAPIGuildResult : P extends typeof $guilds$_$preview ? RESTGetAPIGuildPreviewResult : P extends typeof $guilds$_$channels ? RESTGetAPIGuildChannelsResult : P extends typeof $guilds$_$threads$active ? RESTGetAPIGuildThreadsResult : P extends typeof $guilds$_$members$_ ? RESTGetAPIGuildMemberResult : P extends typeof $guilds$_$members ? RESTGetAPIGuildMembersResult : P extends typeof $guilds$_$members$search ? RESTGetAPIGuildMembersSearchResult : P extends typeof $guilds$_$bans ? RESTGetAPIGuildBansResult : P extends typeof $guilds$_$bans$_ ? RESTGetAPIGuildBanResult : P extends typeof $guilds$_$roles ? RESTGetAPIGuildRolesResult : P extends typeof $guilds$_$roles$_ ? RESTGetAPIGuildRoleResult : P extends typeof $guilds$_$prune ? RESTGetAPIGuildPruneCountResult : P extends typeof $guilds$_$regions ? RESTGetAPIGuildVoiceRegionsResult : P extends typeof $guilds$_$invites ? RESTGetAPIGuildInvitesResult : P extends typeof $guilds$_$integrations ? RESTGetAPIGuildIntegrationsResult : P extends typeof $guilds$_$widget ? RESTGetAPIGuildWidgetSettingsResult : P extends typeof $guilds$_$widgetjson ? RESTGetAPIGuildWidgetJSONResult : P extends typeof $guilds$_$vanityurl ? RESTGetAPIGuildVanityUrlResult : P extends typeof $guilds$_$widgetpng ? RESTGetAPIGuildWidgetImageResult : P extends typeof $guilds$_$welcomescreen ? RESTGetAPIGuildWelcomeScreenResult : P extends typeof $guilds$_$onboarding ? RESTGetAPIGuildOnboardingResult : P extends typeof $guilds$_$scheduledevents ? RESTGetAPIGuildScheduledEventsResult : P extends typeof $guilds$_$scheduledevents$_ ? RESTGetAPIGuildScheduledEventResult : P extends typeof $guilds$_$scheduledevents$_$users ? RESTGetAPIGuildScheduledEventUsersResult : P extends typeof $guilds$templates$_ ? RESTGetAPITemplateResult : P extends typeof $guilds$_$templates ? RESTGetAPIGuildTemplatesResult : P extends typeof $invites$_ ? RESTGetAPIInviteResult : P extends typeof $channels$_$messages ? RESTGetAPIChannelMessagesResult : P extends typeof $channels$_$messages$_ ? RESTGetAPIChannelMessageResult : P extends typeof $channels$_$messages$_$reactions$_ ? RESTGetAPIChannelMessageReactionUsersResult : P extends typeof $channels$_$polls$_$answers$_ ? RESTGetAPIPollAnswerVotersResult : P extends typeof $applications$_$skus ? RESTGetAPISKUsResult : P extends typeof $soundboarddefaultsounds ? RESTGetAPISoundboardDefaultSoundsResult : P extends typeof $guilds$_$soundboardsounds ? RESTGetAPIGuildSoundboardSoundsResult : P extends typeof $guilds$_$soundboardsounds$_ ? RESTGetAPIGuildSoundboardSoundResult : P extends typeof $stageinstances$_ ? RESTGetAPIStageInstanceResult : P extends typeof $stickers$_ ? RESTGetAPIStickerResult : P extends typeof $stickerpacks ? RESTGetStickerPacksResult : P extends typeof $stickerpacks$_ ? RESTGetAPIStickerPackResult : P extends typeof $guilds$_$stickers ? RESTGetAPIGuildStickersResult : P extends typeof $guilds$_$stickers$_ ? RESTGetAPIGuildStickerResult : P extends typeof $skus$_$subscriptions ? RESTGetAPISKUSubscriptionsResult : P extends typeof $skus$_$subscriptions$_ ? RESTGetAPISKUSubscriptionResult : P extends typeof $users$me ? RESTGetAPICurrentUserResult : P extends typeof $users$_ ? RESTGetAPIUserResult : P extends typeof $users$me$guilds ? RESTGetAPICurrentUserGuildsResult : P extends typeof $users$me$guilds$_$member ? RESTGetCurrentUserGuildMemberResult : P extends typeof $users$me$connections ? RESTGetAPICurrentUserConnectionsResult : P extends typeof $users$me$applications$_$roleconnection ? RESTGetAPICurrentUserApplicationRoleConnectionResult : P extends typeof $voice$regions ? RESTGetAPIVoiceRegionsResult : P extends typeof $guilds$_$voicestates$me ? RESTGetAPIGuildVoiceStateCurrentMemberResult : P extends typeof $guilds$_$voicestates$_ ? RESTGetAPIGuildVoiceStateUserResult : P extends typeof $channels$_$webhooks ? RESTGetAPIChannelWebhooksResult : P extends typeof $guilds$_$webhooks ? RESTGetAPIGuildWebhooksResult : P extends typeof $webhooks$_ ? RESTGetAPIWebhookResult : P extends typeof $webhooks$_$_ ? RESTGetAPIWebhookWithTokenResult : never : M extends 'PUT' ? P extends typeof $applications$_$commands ? RESTPutAPIApplicationCommandsResult : P extends typeof $applications$_$guilds$_$commands ? RESTPutAPIApplicationGuildCommandsResult : P extends typeof $applications$_$guilds$_$commands$_$permissions ? RESTPutAPIApplicationCommandPermissionsResult : P extends typeof $applications$_$guilds$_$commands$permissions ? RESTPutAPIGuildApplicationCommandsPermissionsResult : P extends typeof $applications$_$roleconnections$metadata ? RESTPutAPIApplicationRoleConnectionMetadataResult : P extends typeof $channels$_$permissions$_ ? RESTPutAPIChannelPermissionResult : P extends typeof $channels$_$pins$_ ? RESTPutAPIChannelPinResult : P extends typeof $channels$_$recipients$_ ? RESTPutAPIChannelRecipientResult : P extends typeof $channels$_$threadmembers$me ? RESTPutAPIChannelThreadMembersResult : P extends typeof $channels$_$threadmembers$_ ? RESTPutAPIChannelThreadMembersResult : P extends typeof $guilds$_$members$_ ? RESTPutAPIGuildMemberResult : P extends typeof $guilds$_$members$_$roles$_ ? RESTPutAPIGuildMemberRoleResult : P extends typeof $guilds$_$bans$_ ? RESTPutAPIGuildBanResult : P extends typeof $guilds$_$onboarding ? RESTPutAPIGuildOnboardingResult : P extends typeof $guilds$_$incidentactions ? CouldNotFind : P extends typeof $guilds$_$templates$_ ? RESTPutAPIGuildTemplateSyncResult : P extends typeof $channels$_$messages$_$reactions$_$me ? RESTPutAPIChannelMessageReactionResult : P extends typeof $users$me$applications$_$roleconnection ? RESTPutAPICurrentUserApplicationRoleConnectionResult : never : M extends 'POST' ? P extends typeof $interactions$_$_$callback ? RESTPostAPIInteractionCallbackResult : P extends typeof $webhooks$_$_ ? RESTPostAPIInteractionFollowupResult : P extends typeof $applications$_$commands ? RESTPostAPIApplicationCommandsResult : P extends typeof $applications$_$guilds$_$commands ? RESTPostAPIApplicationGuildCommandsResult : P extends typeof $guilds$_$automoderation$rules ? RESTPostAPIAutoModerationRuleResult : P extends typeof $channels$_$invites ? RESTPostAPIChannelInviteResult : P extends typeof $channels$_$followers ? RESTPostAPIChannelFollowersResult : P extends typeof $channels$_$typing ? RESTPostAPIChannelTypingResult : P extends typeof $channels$_$messages$_$threads ? RESTPostAPIChannelMessagesThreadsResult : P extends typeof $channels$_$threads ? RESTPostAPIChannelThreadsResult | CouldNotFind : P extends typeof $guilds$_$emojis ? RESTPostAPIGuildEmojiResult : P extends typeof $applications$_$emojis ? RESTPostAPIApplicationEmojiResult : P extends typeof $applications$_$entitlements$_$consume ? RESTPostAPIEntitlementConsumeResult : P extends typeof $applications$_$entitlements ? RESTPostAPIEntitlementResult : P extends typeof $guilds ? RESTPostAPIGuildsResult : P extends typeof $guilds$_$channels ? RESTPostAPIGuildChannelResult : P extends typeof $guilds$_$bulkban ? RESTPostAPIGuildBulkBanResult : P extends typeof $guilds$_$roles ? RESTPostAPIGuildRoleResult : P extends typeof $guilds$_$mfa ? RESTPostAPIGuildsMFAResult : P extends typeof $guilds$_$prune ? RESTPostAPIGuildPruneResult : P extends typeof $guilds$_$scheduledevents ? RESTPostAPIGuildScheduledEventResult : P extends typeof $guilds$templates$_ ? RESTPostAPITemplateCreateGuildResult : P extends typeof $guilds$_$templates ? RESTPostAPIGuildTemplatesResult : P extends typeof $channels$_$messages ? RESTPostAPIChannelMessageResult : P extends typeof $channels$_$messages$_$crosspost ? RESTPostAPIChannelMessageCrosspostResult : P extends typeof $channels$_$messages$bulkdelete ? RESTPostAPIChannelMessagesBulkDeleteResult : P extends typeof $channels$_$polls$_$expire ? RESTPostAPIPollExpireResult : P extends typeof $guilds$_$soundboardsounds ? RESTPostAPIGuildSoundboardSoundResult : P extends typeof $stageinstances ? RESTPostAPIStageInstanceResult : P extends typeof $users$me$channels ? RESTPostAPICurrentUserCreateDMChannelResult | CouldNotFind : P extends typeof $channels$_$webhooks ? RESTPostAPIChannelWebhookResult : P extends typeof $webhooks$_$_ ? RESTPostAPIWebhookWithTokenResult | RESTPostAPIWebhookWithTokenWaitResult : P extends typeof $webhooks$_$_$slack ? RESTPostAPIWebhookWithTokenSlackResult | RESTPostAPIWebhookWithTokenSlackWaitResult : P extends typeof $webhooks$_$_$github ? RESTPostAPIWebhookWithTokenGitHubResult | RESTPostAPIWebhookWithTokenGitHubWaitResult : never : M extends 'PATCH' ? P extends typeof $webhooks$_$_$messages$original ? RESTPatchAPIInteractionOriginalResponseResult : P extends typeof $webhooks$_$_$messages$_ ? RESTPatchAPIInteractionFollowupResult : P extends typeof $applications$_$commands$_ ? RESTPatchAPIApplicationCommandResult : P extends typeof $applications$_$guilds$_$commands$_ ? RESTPatchAPIApplicationGuildCommandResult : P extends typeof $applications$me ? RESTPatchCurrentApplicationResult : P extends typeof $guilds$_$automoderation$rules$_ ? RESTPatchAPIAutoModerationRuleResult : P extends typeof $channels$_ ? RESTPatchAPIChannelResult : P extends typeof $guilds$_$emojis$_ ? RESTPatchAPIGuildEmojiResult : P extends typeof $applications$_$emojis$_ ? RESTPatchAPIApplicationEmojiResult : P extends typeof $guilds$_ ? RESTPatchAPIGuildResult : P extends typeof $guilds$_$channels ? RESTPatchAPIGuildChannelPositionsResult : P extends typeof $guilds$_$members$_ ? RESTPatchAPIGuildMemberResult : P extends typeof $guilds$_$members$me ? CouldNotFind : P extends typeof $guilds$_$members$me$nick ? RESTPatchAPICurrentGuildMemberNicknameResult : P extends typeof $guilds$_$roles ? RESTPatchAPIGuildRolePositionsResult : P extends typeof $guilds$_$roles$_ ? RESTPatchAPIGuildRoleResult : P extends typeof $guilds$_$widget ? RESTPatchAPIGuildWidgetSettingsResult : P extends typeof $guilds$_$welcomescreen ? RESTPatchAPIGuildWelcomeScreenResult : P extends typeof $guilds$_$scheduledevents$_ ? RESTPatchAPIGuildScheduledEventResult : P extends typeof $guilds$_$templates$_ ? RESTPatchAPIGuildTemplateResult : P extends typeof $channels$_$messages$_ ? RESTPatchAPIChannelMessageResult : P extends typeof $guilds$_$soundboardsounds$_ ? RESTPatchAPIGuildSoundboardSoundResult : P extends typeof $stageinstances$_ ? RESTPatchAPIStageInstanceResult : P extends typeof $guilds$_$stickers$_ ? RESTPatchAPIGuildStickerResult : P extends typeof $users$me ? RESTPatchAPICurrentUserResult : P extends typeof $guilds$_$voicestates$me ? RESTPatchAPIGuildVoiceStateCurrentMemberResult : P extends typeof $guilds$_$voicestates$_ ? RESTPatchAPIGuildVoiceStateUserResult : P extends typeof $webhooks$_ ? RESTPatchAPIWebhookResult : P extends typeof $webhooks$_$_ ? RESTPatchAPIWebhookWithTokenResult : P extends typeof $webhooks$_$_$messages$_ ? RESTPatchAPIWebhookWithTokenMessageResult : never : M extends 'DELETE' ? P extends typeof $channels$_ ? RESTDeleteAPIChannelResult : P extends typeof $channels$_$permissions$_ ? RESTDeleteAPIChannelPermissionResult : P extends typeof $channels$_$pins$_ ? RESTDeleteAPIChannelPinResult : P extends typeof $channels$_$recipients$_ ? RESTDeleteAPIChannelRecipientResult : P extends typeof $channels$_$threadmembers$me ? RESTDeleteAPIChannelThreadMembersResult : P extends typeof $channels$_$threadmembers$_ ? RESTDeleteAPIChannelThreadMembersResult : P extends typeof $guilds$_$emojis$_ ? RESTDeleteAPIGuildEmojiResult : P extends typeof $applications$_$emojis$_ ? RESTDeleteAPIApplicationEmojiResult : P extends typeof $applications$_$entitlements$_ ? RESTDeleteAPIEntitlementResult : P extends typeof $guilds$_ ? RESTDeleteAPIGuildResult : P extends typeof $guilds$_$members$_$roles$_ ? RESTDeleteAPIGuildMemberRoleResult : P extends typeof $guilds$_$members$_ ? RESTDeleteAPIGuildMemberResult : P extends typeof $guilds$_$bans$_ ? RESTDeleteAPIGuildBanResult : P extends typeof $guilds$_$roles$_ ? RESTDeleteAPIGuildRoleResult : P extends typeof $guilds$_$integrations$_ ? RESTDeleteAPIGuildIntegrationResult : P extends typeof $guilds$_$scheduledevents$_ ? RESTDeleteAPIGuildScheduledEventResult : P extends typeof $guilds$_$templates$_ ? RESTDeleteAPIGuildTemplateResult : P extends typeof $invites$_ ? RESTDeleteAPIInviteResult : P extends typeof $channels$_$messages$_$reactions$_$me ? RESTDeleteAPIChannelMessageOwnReactionResult : P extends typeof $channels$_$messages$_$reactions$_$_ ? RESTDeleteAPIChannelMessageUserReactionResult : P extends typeof $channels$_$messages$_$reactions ? CouldNotFind : P extends typeof $channels$_$messages$_$reactions$_ ? RESTDeleteAPIChannelMessageReactionResult : P extends typeof $channels$_$messages$_ ? RESTDeleteAPIChannelMessageResult : P extends typeof $guilds$_$soundboardsounds$_ ? RESTDeleteAPIGuildSoundboardSoundResult : P extends typeof $stageinstances$_ ? RESTDeleteAPIStageInstanceResult : P extends typeof $guilds$_$stickers$_ ? RESTDeleteAPIGuildStickerResult : P extends typeof $users$me$guilds$_ ? RESTDeleteAPICurrentUserGuildResult : P extends typeof $webhooks$_ ? RESTDeleteAPIWebhookResult : P extends typeof $webhooks$_$_ ? RESTDeleteAPIWebhookWithTokenResult : P extends typeof $webhooks$_$_$messages$_ ? RESTDeleteAPIWebhookWithTokenMessageResult : never : never;
type Rest = {
    <M extends RestMethod, P extends RestPathNV<M>>(method: M, path: P, variables?: RestVariables<P> | [...RestVariables<P>, RestQuery<M, P>]): Promise<TypedResponse<RestResult<M, P>>>;
    <M extends RestMethod, P extends RestPathVars<M>>(method: M, path: P, variables: RestVariables<P> | [...RestVariables<P>, RestQuery<M, P>]): Promise<TypedResponse<RestResult<M, P>>>;
    <M extends RestMethod, P extends RestPathVarsQueryRequired<M>>(method: M, path: P, variables: [...RestVariables<P>, RestQuery<M, P>]): Promise<TypedResponse<RestResult<M, P>>>;
    <M extends RestMethod, P extends RestPathVarsData<M>>(method: M, path: P, variables: RestVariables<P> | [...RestVariables<P>, RestQuery<M, P>], data: RestData<M, P>): Promise<TypedResponse<RestResult<M, P>>>;
    <M extends RestMethod, P extends RestPathVarsDataFile<M>>(method: M, path: P, variables: RestVariables<P> | [...RestVariables<P>, RestQuery<M, P>], data: RestData<M, P>, file?: RestFile<M, P>): Promise<TypedResponse<RestResult<M, P>>>;
};

/**
 * [Documentation](https://discord-hono.luis.fun/interactions/rest/)
 * @param {string} token
 */
declare const createRest: (token: string | undefined) => Rest;

declare const CUSTOM_ID_SEPARATOR = ";";
declare const flagData: {
    readonly SUPPRESS_EMBEDS: 2;
    readonly EPHEMERAL: 6;
    readonly SUPPRESS_NOTIFICATIONS: 12;
    readonly IS_COMPONENTS_V2: 15;
};
type MessageFlag = keyof typeof flagData;
declare const messageFlags: (...flag: MessageFlag[]) => number;

type ExecutionCtx = FetchEventLike | ExecutionContext | undefined;
type ContextVariableMap = {};
type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
type AutocompleteOption = APIApplicationCommandInteractionDataStringOption | APIApplicationCommandInteractionDataIntegerOption | APIApplicationCommandInteractionDataNumberOption;
type SubKey = {
    group: string;
    command: string;
    string: string;
};
type ResolvedCategory = keyof APIInteractionDataResolved | keyof APIMessageApplicationCommandInteractionDataResolved;
type ResolvedReturnType<T extends ResolvedCategory> = T extends keyof APIInteractionDataResolved ? NonNullable<APIInteractionDataResolved[T]>[string] : T extends keyof APIMessageApplicationCommandInteractionDataResolved ? APIMessageApplicationCommandInteractionDataResolved[T][string] : never;
declare class Context<E extends Env, This extends CommandContext | ComponentContext | AutocompleteContext | ModalContext | CronContext> {
    #private;
    constructor(env: E['Bindings'], executionCtx: ExecutionCtx, discord: DiscordEnv, key: string, interaction: APIInteraction | CronEvent);
    /**
     * Environment Variables
     */
    get env(): E['Bindings'];
    get event(): FetchEventLike;
    get executionCtx(): ExecutionContext;
    /**
     * Handler triggered string
     */
    get key(): string;
    /**
     * @param {string} key
     * @param {unknown} value
     */
    set<Key extends keyof E['Variables']>(key: Key, value: E['Variables'][Key]): void;
    set<Key extends keyof ContextVariableMap>(key: Key, value: ContextVariableMap[Key]): void;
    /**
     * @param {string} key
     * @returns {unknown}
     */
    get<Key extends keyof E['Variables']>(key: Key): E['Variables'][Key];
    get<Key extends keyof ContextVariableMap>(key: Key): ContextVariableMap[Key];
    /**
     * Variables object
     */
    get var(): Readonly<ContextVariableMap & (IsAny<E['Variables']> extends true ? Record<string, any> : E['Variables'])>;
    /**
     * `c.rest` = `createRest(c.env.DISCORD_TOKEN)`
     */
    get rest(): ReturnType<typeof createRest>;
    /**
     * [Interaction Object](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object)
     */
    get interaction(): APIInteraction | CronEvent;
    /**
     * [Message Flags](https://discord.com/developers/docs/resources/message#message-object-message-flags)
     * @param {"SUPPRESS_EMBEDS" | "EPHEMERAL" | "SUPPRESS_NOTIFICATIONS" | "IS_COMPONENTS_V2"} flag
     * @returns {this}
     * @example
     * ```ts
     * return c.flags('SUPPRESS_EMBEDS', 'EPHEMERAL').res('[Docs](https://example.com)')
     * ```
     */
    flags(...flag: MessageFlag[]): This;
    /**
     * @param data [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure)
     * @param file File: { blob: Blob, name: string } | { blob: Blob, name: string }[]
     * @returns {Response}
     */
    res(data: CustomCallbackData<APIInteractionResponseCallbackData>, file?: FileData): Response;
    /**
     * ACK an interaction and edit a response later, the user sees a loading state
     * @param {(c: This) => Promise<unknown>} handler
     * @returns {Response}
     * @example
     * ```ts
     * return c.resDefer(c => c.followup('Delayed Message'))
     * ```
     */
    resDefer(handler?: (c: This) => Promise<unknown>): Response;
    /**
     * Launch the Activity associated with the app. Only available for apps with Activities enabled
     * @returns {Response}
     */
    resActivity(): Response;
    /**
     * Used for sending messages after resDefer. Functions as a message deletion when called without arguments.
     * @param data string or [Data Structure](https://discord.com/developers/docs/resources/webhook#edit-webhook-message)
     * @param file File: { blob: Blob, name: string } | { blob: Blob, name: string }[]
     * @example
     * ```ts
     * // followup message
     * return c.resDefer(c => c.followup('Image file', { blob: Blob, name: 'image.png' }))
     * // delete message
     * return c.update().resDefer(c => c.followup())
     * ```
     */
    followup(data?: CustomCallbackData<RESTPatchAPIInteractionOriginalResponseJSONBody>, file?: FileData): Promise<TypedResponse<APIMessage | never>>;
    /**
     * This object is useful when using subcommands
     * @example
     * ```ts
     * switch (c.sub.string) {
     *   case 'sub1':
     *     return c.res('sub1')
     *   case 'group sub2':
     *     return c.res('g-sub2')
     * }
     * ```
     */
    get sub(): SubKey;
    /**
     * Response for modal window display
     * @param {Modal} data
     * @returns {Response}
     * @example
     * ```ts
     * return c.resModal(new Modal('unique-id', 'Title')
     *   .row(new TextInput('custom_id', 'Label'))
     * )
     * ```
     */
    resModal(data: Modal | APIModalInteractionResponseCallbackData): Response;
    /**
     * for components, change `c.res()` and `c.resDefer()` to a [Callback Type](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type) that edits the original message
     * @param {boolean} [bool=true]
     * @returns {this}
     * @example
     * ```ts
     * return c.update().res('Edit the original message')
     * ```
     */
    update(bool?: boolean): This;
    /**
     * Focused Option
     *
     * [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data)
     */
    get focused(): AutocompleteOption | undefined;
    /**
     * @param {Autocomplete | APICommandAutocompleteInteractionResponseCallbackData} data [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete)
     * @returns {Response}
     */
    resAutocomplete(data: Autocomplete | APICommandAutocompleteInteractionResponseCallbackData): Response;
    /**
     * Get Resolved Data
     * @beta This may include breaking changes
     * @param {'attachments' | 'channels' | 'members' | 'messages' | 'roles' | 'users'} category 'attachments' | 'channels' | 'members' | 'messages' | 'roles' | 'users'
     * @param {string} id id to get specific resolved object
     * @returns resolved object or undefined
     */
    resolved<T extends ResolvedCategory>(category: T, id?: string): ResolvedReturnType<T> | undefined;
}

type Env = {
    Bindings?: object;
    Variables?: Record<string, unknown>;
};
type DiscordEnv = {
    TOKEN?: string | undefined;
    PUBLIC_KEY?: string | undefined;
    APPLICATION_ID?: string | undefined;
};
type ExcludeMethods<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};
type ComponentType = Button<any> | Select<any, any>;
type ComponentInteraction<T extends ComponentType> = T extends Button<any> ? APIMessageComponentButtonInteraction : T extends Select<any, any> ? APIMessageComponentSelectMenuInteraction : APIMessageComponentInteraction;
type CommandContext<E extends Env = any> = ExcludeMethods<Context<E, CommandContext<E>>, 'update' | 'focused' | 'resAutocomplete' | 'interaction'> & {
    interaction: APIApplicationCommandInteraction;
};
type ComponentContext<E extends Env = any, T extends ComponentType = any> = ExcludeMethods<Context<E & {
    Variables: {
        custom_id?: string;
    };
}, ComponentContext<E, T>>, 'sub' | 'focused' | 'resAutocomplete' | 'interaction'> & {
    interaction: ComponentInteraction<T>;
};
type AutocompleteContext<E extends Env = any> = ExcludeMethods<Context<E, AutocompleteContext<E>>, 'flags' | 'res' | 'resDefer' | 'resActivity' | 'followup' | 'resModal' | 'update' | 'interaction'> & {
    interaction: APIApplicationCommandAutocompleteInteraction;
};
type ModalContext<E extends Env = any> = ExcludeMethods<Context<E & {
    Variables: {
        custom_id?: string;
    };
}, ModalContext<E>>, 'sub' | 'resModal' | 'focused' | 'resAutocomplete' | 'interaction'> & {
    interaction: APIModalSubmitInteraction;
};
type CronContext<E extends Env = any> = ExcludeMethods<Context<E, CronContext<E>>, 'flags' | 'res' | 'resDefer' | 'resActivity' | 'followup' | 'sub' | 'resModal' | 'update' | 'focused' | 'resAutocomplete' | 'interaction' | 'resolved'> & {
    interaction: CronEvent;
};
type CommandHandler<E extends Env> = (c: CommandContext<E>) => Promise<Response> | Response;
type ComponentHandler<E extends Env, T extends ComponentType> = (c: ComponentContext<E, T>) => Promise<Response> | Response;
type AutocompleteHandler<E extends Env> = (c: AutocompleteContext<E>) => Promise<Response> | Response;
type ModalHandler<E extends Env> = (c: ModalContext<E>) => Promise<Response> | Response;
type CronHandler<E extends Env> = (c: CronContext<E>) => Promise<unknown>;
type Verify = (body: string, signature: string | null, timestamp: string | null, publicKey: string) => Promise<boolean> | boolean;
type InitOptions<E extends Env> = {
    verify?: Verify;
    discordEnv?: (env: E['Bindings']) => DiscordEnv;
};
type CronEvent = {
    cron: string;
    type: string;
    scheduledTime: number;
};
interface ExecutionContext {
    waitUntil(promise: Promise<unknown>): void;
    passThroughOnException(): void;
}
declare abstract class FetchEventLike {
    abstract readonly request: Request;
    abstract respondWith(promise: Response | Promise<Response>): void;
    abstract passThroughOnException(): void;
    abstract waitUntil(promise: Promise<void>): void;
}
type CustomCallbackData<T extends Record<string, unknown>> = (Omit<T, 'components' | 'embeds' | 'poll'> & {
    components?: Components | (LayoutActionRow | LayoutSection | LayoutSeparator | LayoutContainer | ContentTextDisplay | ContentMediaGallery | ContentFile)[] | T['components'];
    embeds?: (Embed | EmbedBuilder)[] | T['embeds'];
    poll?: Poll | T['poll'];
}) | string;
type FileUnit = {
    blob: Blob;
    name: string;
};
type FileData = FileUnit | FileUnit[];
type TypedResponse<T> = Omit<Response, 'json'> & {
    json(): Promise<T>;
};

type LayoutStyle = 'Action Row' | 'Section' | 'Separator' | 'Container';
type LayoutComponent<T extends LayoutStyle> = T extends 'Action Row' ? APIActionRowComponent<APIComponentInMessageActionRow> : T extends 'Section' ? APISectionComponent : T extends 'Separator' ? APISeparatorComponent : T extends 'Container' ? APIContainerComponent : never;
declare class LayoutImpl<T extends LayoutStyle> extends Builder<LayoutComponent<T>> {
    /**
     * required: flags("IS_COMPONENTS_V2")
     *
     * [Layout Style Structure](https://discord.com/developers/docs/components/reference#component-object)
     * @param {"Action Row" | "Section" | "Separator" | "Container"} style
     */
    constructor(style: T);
    /**
     * available: ALL
     * @param {number} e
     * @returns {this}
     */
    id(e: number): this;
    /**
     * required: [Action Row](https://discord.com/developers/docs/components/reference#action-row-action-row-structure), [Section](https://discord.com/developers/docs/components/reference#section-section-structure), [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
     * @param e
     * @returns {this}
     */
    components(...e: (T extends 'Action Row' ? APIComponentInMessageActionRow | Button<any> | Select<any, any> : T extends 'Section' ? APISectionComponent | ContentTextDisplay : T extends 'Container' ? APIContainerComponent | LayoutActionRow | LayoutSection | LayoutSeparator | ContentTextDisplay | ContentMediaGallery | ContentFile : never)[]): this;
    /**
     * available: [Section](https://discord.com/developers/docs/components/reference#section-section-structure)
     * @param {APIButtonComponent | APIThumbnailComponent} e
     * @returns {this}
     */
    accessory(e: T extends 'Section' ? APIButtonComponent | APIThumbnailComponent | Button<any> | ContentThumbnail : never): this;
    /**
     * available: [Separator](https://discord.com/developers/docs/components/reference#separator-separator-structure)
     * @param {boolean} e
     * @returns {this}
     */
    divider(e: T extends 'Separator' ? boolean : never): this;
    /**
     * available: [Separator](https://discord.com/developers/docs/components/reference#separator-separator-structure)
     * @param {1 | 2} e
     * @returns {this}
     */
    spacing(e: T extends 'Separator' ? 1 | 2 : never): this;
    /**
     * available: [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
     * @param {number} e
     * @returns {this}
     */
    accent_color(e: T extends 'Container' ? number : never): this;
    /**
     * available: [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
     * @param {boolean} [e=true] default: true
     * @returns {this}
     */
    spoiler(e?: T extends 'Container' ? boolean : never): this;
}
type LayoutActionRow = ExcludeMethods<LayoutImpl<'Action Row'>, 'accessory' | 'divider' | 'spacing' | 'accent_color' | 'spoiler'>;
type LayoutSection = ExcludeMethods<LayoutImpl<'Section'>, 'divider' | 'spacing' | 'accent_color' | 'spoiler'>;
type LayoutSeparator = ExcludeMethods<LayoutImpl<'Separator'>, 'components' | 'accessory' | 'accent_color' | 'spoiler'>;
type LayoutContainer = ExcludeMethods<LayoutImpl<'Container'>, 'accessory' | 'divider' | 'spacing'>;
declare const Layout: {
    new (style: "Action Row"): LayoutActionRow;
    new (style: "Section"): LayoutSection;
    new (style: "Separator"): LayoutSeparator;
    new (style: "Container"): LayoutContainer;
};
type ContentStyle = 'Text Display' | 'Thumbnail' | 'Media Gallery' | 'File';
type ContentJson<T extends ContentStyle> = T extends 'Text Display' ? APITextDisplayComponent : T extends 'Thumbnail' ? APIThumbnailComponent : T extends 'Media Gallery' ? APIMediaGalleryComponent : T extends 'File' ? APIFileComponent : never;
type ContentData<T extends ContentStyle> = T extends 'Text Display' ? APITextDisplayComponent['content'] : T extends 'Thumbnail' ? string | APIThumbnailComponent['media'] : T extends 'Media Gallery' ? string | APIMediaGalleryComponent['items'][number] | (string | APIMediaGalleryComponent['items'][number])[] : T extends 'File' ? string | APIFileComponent['file'] : never;
declare class ContentImpl<T extends ContentStyle = 'Text Display'> extends Builder<ContentJson<T>> {
    /**
     * required: flags("IS_COMPONENTS_V2")
     *
     * [Content Style Structure](https://discord.com/developers/docs/components/reference#component-object)
     * @param data
     * @param {"Text Display" | "Thumbnail" | "Media Gallery" | "File"} style
     */
    constructor(data: ContentData<T>, style?: T);
    /**
     * available: ALL
     * @param {number} e
     * @returns {this}
     */
    id(e: number): this;
    /**
     * available: [Thumbnail](https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure)
     * @param {string} e
     * @returns {this}
     */
    description(e: T extends 'Thumbnail' ? string : never): this;
    /**
     * available: [Thumbnail](https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure), [File](https://discord.com/developers/docs/components/reference#file-file-structure)
     * @param {string} e
     * @returns {this}
     */
    spoiler(e?: T extends 'Thumbnail' | 'File' ? boolean : never): this;
}
type ContentTextDisplay = ExcludeMethods<ContentImpl<'Text Display'>, 'description' | 'spoiler'>;
type ContentThumbnail = ContentImpl<'Thumbnail'>;
type ContentMediaGallery = ExcludeMethods<ContentImpl<'Media Gallery'>, 'description' | 'spoiler'>;
type ContentFile = ExcludeMethods<ContentImpl<'File'>, 'description'>;
declare const Content: {
    new (data: string, style?: "Text Display"): ContentTextDisplay;
    new (data: string | APIThumbnailComponent["media"], style: "Thumbnail"): ContentThumbnail;
    new (data: string | APIMediaGalleryComponent["items"][number] | (string | APIMediaGalleryComponent["items"][number])[], style: "Media Gallery"): ContentMediaGallery;
    new (data: string | APIFileComponent["file"], style: "File"): ContentFile;
};

type ExtractTextInputArgs<T> = T extends TextInput<infer K, infer R> ? {
    [P in K]: string;
} extends infer O ? R extends true ? O : Partial<O> : never : never;
type ExtractTextInputsObject<T extends any[]> = MergeObjects<{
    [I in keyof T]: T[I] extends TextInput<any, any> ? ExtractTextInputArgs<T[I]> : never;
}>;
declare class Modal<_V extends {} = {}> {
    #private;
    /**
     * @param {string} unique_id
     * @param {string} title
     */
    constructor(unique_id: string, title: string);
    /**
     * export json data
     * @returns {APIModalInteractionResponseCallbackData}
     */
    toJSON(): APIModalInteractionResponseCallbackData;
    /**
     * @param {string} e
     * @returns {this}
     */
    custom_id(e: string): this;
    /**
     * @param {...(TextInput | APITextInputComponent)} e
     * @returns {this}
     */
    row<O extends (TextInput<any, any> | APITextInputComponent)[]>(...e: O): Modal<ExtractTextInputsObject<O>>;
    /**
     * Overwrite title
     * @param {string} e
     * @returns {this}
     */
    title(e: string): this;
}
declare class TextInput<K extends string, _R extends boolean = false> extends Builder<APITextInputComponent> {
    /**
     * [Text Input Structure](https://discord.com/developers/docs/interactions/message-components#text-input-object)
     * @param {string} custom_id
     * @param {string} label
     * @param {"Single" | "Multi"} [input_style="Single"]
     */
    constructor(custom_id: K, label: string, input_style?: 'Single' | 'Multi');
    /**
     * @param {number} e
     * @returns {this}
     */
    min_length(e: number): this;
    /**
     * @param {number} e
     * @returns {this}
     */
    max_length(e: number): this;
    /**
     * Whether or not this text input is required or not
     * @param {boolean} [e=true]
     * @returns {this}
     */
    required<R extends boolean = true>(e?: R): TextInput<K, R>;
    /**
     * The pre-filled text in the text input
     * @param {string} e
     * @returns {this}
     */
    value(e: string): this;
    /**
     * @param {string} e
     * @returns {this}
     */
    placeholder(e: string): this;
}

declare class DiscordHono<E extends Env = Env> {
    #private;
    /**
     * [Documentation](https://discord-hono.luis.fun/interactions/discord-hono/)
     * @param {InitOptions} options
     */
    constructor(options?: InitOptions<E>);
    /**
     * @param {string | RegExp} command Match the first argument of `Command`
     * @param handler
     * @returns {this}
     */
    command(command: string, handler: CommandHandler<E>): this;
    /**
     * @param {string | RegExp} component_id Match the first argument of `Button` or `Select`
     * @param handler
     * @returns {this}
     */
    component<T extends ComponentType>(component_id: string, handler: ComponentHandler<E, T>): this;
    /**
     * @param {string | RegExp} command Match the first argument of `Command`
     * @param autocomplete
     * @param handler
     * @returns {this}
     */
    autocomplete(command: string, autocomplete: AutocompleteHandler<E>, handler?: CommandHandler<E>): this;
    /**
     * @param {string | RegExp} modal_id Match the first argument of `Modal`
     * @param handler
     * @returns {this}
     */
    modal(modal_id: string, handler: ModalHandler<E>): this;
    /**
     * @param cron Match the crons in the toml file
     * @param handler
     * @returns {this}
     */
    cron(cron: string, handler: CronHandler<E>): this;
    /**
     * @param {Request} request
     * @param {Record<string, unknown>} env
     * @param executionCtx
     * @returns {Promise<Response>}
     */
    fetch: (request: Request, env?: E["Bindings"], executionCtx?: ExecutionContext) => Promise<Response>;
    /**
     * Method triggered by cloudflare workers' crons
     * @param event
     * @param {Record<string, unknown>} env
     * @param executionCtx
     */
    scheduled: (event: CronEvent, env: E["Bindings"], executionCtx?: ExecutionContext) => Promise<void>;
}

declare class DiscordHonoExtends<E extends Env> extends DiscordHono<E> {
    loader(handlers: Handler<E>[]): this;
}
type Var = {};
type ExtractComponentVars<T> = T extends Select<infer K, infer _T2> ? {
    [P in K]: string[];
} : {};
type Factory<E extends Env> = {
    discord(init?: InitOptions<E>): DiscordHonoExtends<E>;
    command<V extends Var>(command: Command<V>, handler: CommandHandler<E & {
        Variables?: V;
    }>): {
        command: Command;
        handler: CommandHandler<E>;
    };
    component<V extends ExtractComponentVars<C>, C extends ComponentType>(component: C, handler: ComponentHandler<E & {
        Variables?: V;
    }, C>): {
        component: C;
        handler: ComponentHandler<E, C>;
    };
    autocomplete<V extends Var>(command: Command<V>, autocomplete: AutocompleteHandler<E & {
        Variables?: V;
    }>, handler: CommandHandler<E & {
        Variables?: V;
    }>): {
        command: Command;
        autocomplete: AutocompleteHandler<E>;
        handler: CommandHandler<E>;
    };
    modal<V extends Var>(modal: Modal<V>, handler: ModalHandler<E & {
        Variables?: V;
    }>): {
        modal: Modal;
        handler: ModalHandler<E>;
    };
    cron<V extends Var>(cron: string, handler: CronHandler<E & {
        Variables?: V;
    }>): {
        cron: string;
        handler: CronHandler<E>;
    };
    getCommands(handlers: Handler<E>[]): Command[];
};
type Handler<E extends Env> = ReturnType<Factory<E>['command']> | ReturnType<Factory<E>['component']> | ReturnType<Factory<E>['autocomplete']> | ReturnType<Factory<E>['modal']> | ReturnType<Factory<E>['cron']>;
declare const createFactory: <E extends Env = Env>() => Factory<E>;

/**
 * [Docs](https://discord-hono.luis.fun/rest-api/register/)
 * @param {(Command | SlashCommandBuilder | RESTPostAPIApplicationCommandsJSONBody)[]} commands
 * @param {string} application_id
 * @param {string} token
 * @param {string} [guild_id]
 */
declare const register: (commands: (Command | SlashCommandBuilder | RESTPostAPIApplicationCommandsJSONBody)[], application_id: string | undefined, token: string | undefined, guild_id?: string | undefined) => Promise<string>;

/**
 * [Reference](https://discord.com/developers/docs/topics/rate-limits)
 * @param {() => ReturnType<typeof fetch>} fetchFunc
 * @param {number} retryCount
 * @param {number} [addDelay=0] Additional delay milliseconds
 * @returns {ReturnType<typeof fetch>}
 */
declare const retry429: (fetchFunc: () => ReturnType<typeof fetch>, retryCount: number, addDelay?: number) => ReturnType<typeof fetch>;

/**
 * [Documentation](https://discord-hono.luis.fun/interactions/webhook/)
 * @param {string | [string] | [string, RestQuery<"POST", typeof $webhooks$_$_>]} url webhook url
 * @param {RestData<"POST", typeof $webhooks$_$_>} data [RESTPostAPIWebhookWithTokenJSONBody](https://discord-api-types.dev/api/next/discord-api-types-v10/interface/RESTPostAPIWebhookWithTokenJSONBody)
 * @param {RestFile<"POST", typeof $webhooks$_$_>} file File: { blob: Blob, name: string } | { blob: Blob, name: string }[]
 * @returns {RestResult<"POST", typeof $webhooks$_$_>}
 */
declare const webhook: (url: string | [string] | [string, RestQuery<"POST", typeof $webhooks$_$_>], data: RestData<"POST", typeof $webhooks$_$_>, file?: RestFile<"POST", typeof $webhooks$_$_>) => Promise<TypedResponse<RestResult<"POST", typeof $webhooks$_$_>>>;

/**
 * @alpha
 */
declare const testCommandRequestBodyJson: <V extends {}>(command: Command<V> | ReturnType<Command["toJSON"]>, options?: V) => APIApplicationCommandInteraction;
/**
 * @alpha
 * ✅ Command: name, type
 *
 * ✅ Options: STRING, INTEGER, BOOLEAN, NUMBER
 * @param {Command | ReturnType<Command['toJSON']>} command
 * @param {Record<string, unknown>} [options]
 * @returns {RequestInit}
 */
declare const testCommandRequestInit: <V extends {}>(command: Command<V> | ReturnType<Command["toJSON"]>, options?: V) => RequestInit;

declare const verify: (body: string, signature: string | null, timestamp: string | null, publicKey: string) => Promise<boolean>;

/**
 * verify that always returns `true`.
 * @param rest
 * @returns {true}
 */
declare const testVerifyTrue: (...rest: Parameters<typeof verify>) => Promise<true>;

export { $applications$_$activityinstances$_, $applications$_$commands, $applications$_$commands$_, $applications$_$emojis, $applications$_$emojis$_, $applications$_$entitlements, $applications$_$entitlements$_, $applications$_$entitlements$_$consume, $applications$_$guilds$_$commands, $applications$_$guilds$_$commands$_, $applications$_$guilds$_$commands$_$permissions, $applications$_$guilds$_$commands$permissions, $applications$_$roleconnections$metadata, $applications$_$skus, $applications$me, $channels$_, $channels$_$followers, $channels$_$invites, $channels$_$messages, $channels$_$messages$_, $channels$_$messages$_$crosspost, $channels$_$messages$_$reactions, $channels$_$messages$_$reactions$_, $channels$_$messages$_$reactions$_$_, $channels$_$messages$_$reactions$_$me, $channels$_$messages$_$threads, $channels$_$messages$bulkdelete, $channels$_$permissions$_, $channels$_$pins, $channels$_$pins$_, $channels$_$polls$_$answers$_, $channels$_$polls$_$expire, $channels$_$recipients$_, $channels$_$sendsoundboardsound, $channels$_$threadmembers, $channels$_$threadmembers$_, $channels$_$threadmembers$me, $channels$_$threads, $channels$_$threads$archived$private, $channels$_$threads$archived$public, $channels$_$typing, $channels$_$users$me$threads$archived$private, $channels$_$webhooks, $guilds, $guilds$_, $guilds$_$auditlogs, $guilds$_$automoderation$rules, $guilds$_$automoderation$rules$_, $guilds$_$bans, $guilds$_$bans$_, $guilds$_$bulkban, $guilds$_$channels, $guilds$_$emojis, $guilds$_$emojis$_, $guilds$_$incidentactions, $guilds$_$integrations, $guilds$_$integrations$_, $guilds$_$invites, $guilds$_$members, $guilds$_$members$_, $guilds$_$members$_$roles$_, $guilds$_$members$me, $guilds$_$members$me$nick, $guilds$_$members$search, $guilds$_$mfa, $guilds$_$onboarding, $guilds$_$preview, $guilds$_$prune, $guilds$_$regions, $guilds$_$roles, $guilds$_$roles$_, $guilds$_$scheduledevents, $guilds$_$scheduledevents$_, $guilds$_$scheduledevents$_$users, $guilds$_$soundboardsounds, $guilds$_$soundboardsounds$_, $guilds$_$stickers, $guilds$_$stickers$_, $guilds$_$templates, $guilds$_$templates$_, $guilds$_$threads$active, $guilds$_$vanityurl, $guilds$_$voicestates$_, $guilds$_$voicestates$me, $guilds$_$webhooks, $guilds$_$welcomescreen, $guilds$_$widget, $guilds$_$widgetjson, $guilds$_$widgetpng, $guilds$templates$_, $interactions$_$_$callback, $invites$_, $skus$_$subscriptions, $skus$_$subscriptions$_, $soundboarddefaultsounds, $stageinstances, $stageinstances$_, $stickerpacks, $stickerpacks$_, $stickers$_, $users$_, $users$me, $users$me$applications$_$roleconnection, $users$me$channels, $users$me$connections, $users$me$guilds, $users$me$guilds$_, $users$me$guilds$_$member, $voice$regions, $webhooks$_, $webhooks$_$_, $webhooks$_$_$github, $webhooks$_$_$messages$_, $webhooks$_$_$messages$original, $webhooks$_$_$slack, Autocomplete, type AutocompleteContext, type AutocompleteHandler, Button, CUSTOM_ID_SEPARATOR, Command, type CommandContext, type CommandHandler, type ComponentContext, type ComponentHandler, Components, Content, type CronContext, type CronHandler, DiscordHono, Embed, type InitOptions, Layout, Modal, type ModalContext, type ModalHandler, Option, Poll, type RestData, type RestFile, type RestMethod, type RestPath, type RestQuery, type RestResult, type RestVariables, Select, SubCommand, SubGroup, TextInput, _applications_$_activityinstances_$, _applications_$_commands, _applications_$_commands_$, _applications_$_emojis, _applications_$_emojis_$, _applications_$_entitlements, _applications_$_entitlements_$, _applications_$_entitlements_$_consume, _applications_$_guilds_$_commands, _applications_$_guilds_$_commands_$, _applications_$_guilds_$_commands_$_permissions, _applications_$_guilds_$_commands_permissions, _applications_$_roleconnections_metadata, _applications_$_skus, _applications_me, _channels_$, _channels_$_followers, _channels_$_invites, _channels_$_messages, _channels_$_messages_$, _channels_$_messages_$_crosspost, _channels_$_messages_$_reactions, _channels_$_messages_$_reactions_$, _channels_$_messages_$_reactions_$_$, _channels_$_messages_$_reactions_$_me, _channels_$_messages_$_threads, _channels_$_messages_bulkdelete, _channels_$_permissions_$, _channels_$_pins, _channels_$_pins_$, _channels_$_polls_$_answers_$, _channels_$_polls_$_expire, _channels_$_recipients_$, _channels_$_sendsoundboardsound, _channels_$_threadmembers, _channels_$_threadmembers_$, _channels_$_threadmembers_me, _channels_$_threads, _channels_$_threads_archived_private, _channels_$_threads_archived_public, _channels_$_typing, _channels_$_users_me_threads_archived_private, _channels_$_webhooks, _guilds, _guilds_$, _guilds_$_auditlogs, _guilds_$_automoderation_rules, _guilds_$_automoderation_rules_$, _guilds_$_bans, _guilds_$_bans_$, _guilds_$_bulkban, _guilds_$_channels, _guilds_$_emojis, _guilds_$_emojis_$, _guilds_$_incidentactions, _guilds_$_integrations, _guilds_$_integrations_$, _guilds_$_invites, _guilds_$_members, _guilds_$_members_$, _guilds_$_members_$_roles_$, _guilds_$_members_me, _guilds_$_members_me_nick, _guilds_$_members_search, _guilds_$_mfa, _guilds_$_onboarding, _guilds_$_preview, _guilds_$_prune, _guilds_$_regions, _guilds_$_roles, _guilds_$_roles_$, _guilds_$_scheduledevents, _guilds_$_scheduledevents_$, _guilds_$_scheduledevents_$_users, _guilds_$_soundboardsounds, _guilds_$_soundboardsounds_$, _guilds_$_stickers, _guilds_$_stickers_$, _guilds_$_templates, _guilds_$_templates_$, _guilds_$_threads_active, _guilds_$_vanityurl, _guilds_$_voicestates_$, _guilds_$_voicestates_me, _guilds_$_webhooks, _guilds_$_welcomescreen, _guilds_$_widget, _guilds_$_widgetjson, _guilds_$_widgetpng, _guilds_templates_$, _interactions_$_$_callback, _invites_$, _skus_$_subscriptions, _skus_$_subscriptions_$, _soundboarddefaultsounds, _stageinstances, _stageinstances_$, _stickerpacks, _stickerpacks_$, _stickers_$, _users_$, _users_me, _users_me_applications_$_roleconnection, _users_me_channels, _users_me_connections, _users_me_guilds, _users_me_guilds_$, _users_me_guilds_$_member, _voice_regions, _webhooks_$, _webhooks_$_$, _webhooks_$_$_github, _webhooks_$_$_messages_$, _webhooks_$_$_messages_original, _webhooks_$_$_slack, createFactory, createRest, messageFlags, register, retry429, testCommandRequestBodyJson, testCommandRequestInit, testVerifyTrue, webhook };

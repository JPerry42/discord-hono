// src/utils.ts
var CUSTOM_ID_SEPARATOR = ";";
var flagData = {
  SUPPRESS_EMBEDS: 2,
  EPHEMERAL: 6,
  SUPPRESS_NOTIFICATIONS: 12,
  IS_COMPONENTS_V2: 15
};
var messageFlags = (...flag) => flag.reduce((result, f) => result | 1 << flagData[f], 0);
var toJSON = (obj) => "toJSON" in obj && typeof obj.toJSON === "function" ? obj.toJSON() : obj;
var prepareData = (data) => {
  if (!data) return void 0;
  if (isString(data)) return { content: data };
  if (isArray(data)) return data;
  const { components, embeds, poll, ...rest } = data;
  if (components) rest.components = isArray(components) ? components.map(toJSON) : toJSON(components);
  if (embeds) rest.embeds = embeds.map(toJSON);
  if (poll) rest.poll = toJSON(poll);
  return rest;
};
var formData = (data, file) => {
  const body = new FormData();
  if (data && Object.keys(data).length > 0) body.append("payload_json", JSON.stringify(data));
  if (file)
    (isArray(file) ? file : [file]).forEach((f, i) => {
      body.append(`files[${i}]`, f.blob, f.name);
    });
  return body;
};
var newError = (locate, text) => new Error(`discord-hono(${locate}): ${text}`);
var queryStringify = (query) => {
  if (!query) return "";
  const queryMap = {};
  for (const [key, value] of Object.entries(query)) if (value != null) queryMap[key] = String(value);
  return `?${new URLSearchParams(queryMap).toString()}`;
};
var isString = (value) => typeof value === "string";
var isArray = (value) => Array.isArray(value);

// src/builders/utils.ts
var Builder = class {
  #store;
  constructor(init) {
    this.#store = init;
  }
  /**
   * assign object `Object.assign(this.#store, obj)`
   */
  a(obj) {
    Object.assign(this.#store, obj);
    return this;
  }
  /**
   * export json object
   * @returns {Obj}
   */
  toJSON() {
    return { ...this.#store };
  }
};
var warnBuilder = (clas, type, method) => console.warn(`\u26A0\uFE0F ${clas}(${type}).${method} is not available`);
var ifThrowHasSemicolon = (str) => {
  if (str.includes(CUSTOM_ID_SEPARATOR)) throw new Error(`Don't use "${CUSTOM_ID_SEPARATOR}"`);
};

// src/builders/autocomplete.ts
var Autocomplete = class extends Builder {
  #search;
  constructor(search) {
    super({});
    this.#search = search?.toString() || "";
  }
  choices(...e) {
    const choices = e.filter((e2) => {
      if (e2.name.includes(this.#search)) return true;
      if (Object.values(e2.name_localizations || {}).some((e3) => e3?.includes(this.#search))) return true;
      if (e2.value.toString().includes(this.#search)) return true;
      return false;
    });
    if (choices.length > 25) choices.length = 25;
    return this.a({ choices });
  }
};

// src/builders/command.ts
var CommandBase = class extends Builder {
  /**
   * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
   * @param {string} name 1-32 character name; `CHAT_INPUT` command names must be all lowercase matching `^[-_\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}]{1,32}$`
   * @param {string} description 1-100 character description for `CHAT_INPUT` commands, empty string for `USER` and `MESSAGE` commands
   */
  constructor(name, description = "") {
    super({ name, description });
  }
  /**
   * [Locale](https://discord.com/developers/docs/reference#locales)
   *
   * Localization dictionary for the name field. Values follow the same restrictions as name
   * @param {Partial<Record<Locale, string>>} e
   * @returns {this}
   */
  name_localizations(e) {
    return this.a({ name_localizations: e });
  }
  /**
   * [Locale](https://discord.com/developers/docs/reference#locales)
   *
   * Localization dictionary for the description field. Values follow the same restrictions as description
   * @param {Partial<Record<Locale, string>>} e
   * @returns {this}
   */
  description_localizations(e) {
    return this.a({ description_localizations: e });
  }
};
var Command = class extends CommandBase {
  /**
   * @param {string} e
   * @returns {this}
   */
  id(e) {
    return this.a({ id: e });
  }
  /**
   * [Application Command Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types)
   * @param {ApplicationCommandType} e
   * @returns {this}
   */
  type(e) {
    return this.a({ type: e });
  }
  /**
   * @param {string} e
   * @returns {this}
   */
  application_id(e) {
    return this.a({ application_id: e });
  }
  /**
   * Guild id of the command, if not global
   * @param {string} e
   * @returns {this}
   */
  guild_id(e) {
    return this.a({ guild_id: e });
  }
  /**
   * Valid Types: 1:CHAT_INPUT
   * @param {...(Option | APIApplicationCommandOption)} e
   * @returns {this}
   */
  options(...e) {
    return this.a({ options: e.map(toJSON) });
  }
  /**
   * @param {string | null} e
   * @returns {this}
   */
  default_member_permissions(e) {
    return this.a({ default_member_permissions: e });
  }
  /**
   * @deprecated Use `contexts` instead
   * @param {boolean} [e=true]
   * @returns {this}
   */
  dm_permission(e = true) {
    return this.a({ dm_permission: e });
  }
  /**
   * Whether the command is enabled by default when the app is added to a guild
   *
   * If missing, this property should be assumed as `true`
   * @deprecated Use `default_member_permissions` instead
   * @param {boolean} [e=true]
   * @returns {this}
   */
  default_permission(e = true) {
    return this.a({ default_permission: e });
  }
  /**
   * Indicates whether the command is age-restricted
   * @param {boolean} [e=true]
   * @returns {this}
   */
  nsfw(e = true) {
    return this.a({ nsfw: e });
  }
  /**
   * [Application Integration Types](https://discord.com/developers/docs/resources/application#application-object-application-integration-types)
   *
   * Installation context(s) where the command is available, only for globally-scoped commands.
   * @unstable
   * @param {...ApplicationIntegrationType} e
   * @returns {this}
   */
  integration_types(...e) {
    return this.a({ integration_types: e });
  }
  /**
   * [Interaction Context Types](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types)
   *
   * Interaction context(s) where the command can be used, only for globally-scoped commands.
   * @unstable
   * @param {...InteractionContextType} e
   * @returns {this}
   */
  contexts(...e) {
    return this.a({ contexts: e });
  }
  /**
   * @param {string} e
   * @returns {this}
   */
  version(e) {
    return this.a({ version: e });
  }
  /**
   * Valid Types: 4:PRIMARY_ENTRY_POINT
   *
   * [Hander Types](https://discord.com/developers/docs/interactions/application-commands#application-command-object-entry-point-command-handler-types)
   * @param e
   * @returns
   */
  handler(e) {
    return this.a({ handler: e });
  }
};
var SubGroup = class extends CommandBase {
  /**
   * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
   * @param {string} name 1-32 character name
   * @param {string} description 1-100 character description
   */
  constructor(name, description = "") {
    super(name, description);
    this.a({ type: 2 });
  }
  /**
   * @param {...(SubCommand | APIApplicationCommandSubcommandOption)} e
   * @returns {this}
   */
  options(...e) {
    return this.a({ options: e.map(toJSON) });
  }
};
var SubCommand = class extends CommandBase {
  /**
   * [Command Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object)
   * @param {string} name 1-32 character name
   * @param {string} description 1-100 character description
   */
  constructor(name, description = "") {
    super(name, description);
    this.a({ type: 1 });
  }
  /**
   * @param {...(Option | APIApplicationCommandBasicOption)} e
   * @returns {this}
   */
  options(...e) {
    return this.a({ options: e.map(toJSON) });
  }
};
var Option = class extends CommandBase {
  #type;
  #assign(method, doType, obj) {
    if (!doType.includes(this.#type)) {
      warnBuilder("Option", this.#type, method);
      return this;
    }
    return this.a(obj);
  }
  /**
   * [Command Option Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure)
   * @param {string} name 1-32 character name
   * @param {string} description 1-100 character description
   * @param {"String" | "Integer" | "Number" | "Boolean" | "User" | "Channel" | "Role" | "Mentionable" | "Attachment"} [option_type="String"]
   */
  constructor(name, description, option_type = "String") {
    const typeNum = {
      String: 3,
      Integer: 4,
      Boolean: 5,
      User: 6,
      Channel: 7,
      Role: 8,
      Mentionable: 9,
      Number: 10,
      Attachment: 11
    };
    super(name, description);
    this.a({ type: typeNum[option_type] || 3 });
    this.#type = option_type;
  }
  /**
   * @param {boolean} [e=true]
   * @returns {this}
   */
  required(e = true) {
    return this.a({ required: e });
  }
  /**
   * available: String, Integer, Number
   * @param {...APIApplicationCommandOptionChoice<string | number>} e
   * @returns {this}
   */
  choices(...e) {
    return this.#assign("choices", ["String", "Integer", "Number"], {
      choices: e
    });
  }
  /**
   * available: Channel
   *
   * [Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
   * @param {...ChannelType} e
   * @returns {this}
   */
  channel_types(...e) {
    return this.#assign("channel_types", ["Channel"], { channel_types: e });
  }
  /**
   * available: Integer, Number
   * @param e
   * @returns {this}
   */
  min_value(e) {
    return this.#assign("min_value", ["Integer", "Number"], { min_value: e });
  }
  /**
   * available: Integer, Number
   * @param e
   * @returns {this}
   */
  max_value(e) {
    return this.#assign("max_value", ["Integer", "Number"], { max_value: e });
  }
  /**
   * available: String
   * @param e 0 - 6000
   * @returns {this}
   */
  min_length(e) {
    return this.#assign("min_length", ["String"], { min_length: e });
  }
  /**
   * available: String
   * @param e 1 - 6000
   * @returns {this}
   */
  max_length(e) {
    return this.#assign("max_length", ["String"], { max_length: e });
  }
  /**
   * available: String, Integer, Number
   * @param e default: true
   * @returns {this}
   */
  autocomplete(e) {
    return this.#assign("autocomplete", ["String", "Integer", "Number"], { autocomplete: e !== false });
  }
};

// src/builders/components.ts
var Components = class {
  #components = [];
  /**
   * push component
   * @param {...(Button | Select | APIComponentInMessageActionRow)} e
   * @returns {this}
   */
  row(...e) {
    if (this.#components.length >= 5) console.warn("You can have up to 5 Action Rows per message");
    this.#components.push({
      type: 1,
      components: e.map(toJSON)
    });
    return this;
  }
  /**
   * export json object
   * @returns {Obj}
   */
  toJSON() {
    return this.#components;
  }
};
var buttonStyleNum = {
  Primary: 1,
  Secondary: 2,
  Success: 3,
  Danger: 4,
  Link: 5,
  SKU: 6
};
var Button = class extends Builder {
  #style;
  #uniqueStr = "";
  #assign(method, doNotStyle, obj) {
    if (doNotStyle.includes(this.#style)) {
      warnBuilder("Button", this.#style, method);
      return this;
    }
    return this.a(obj);
  }
  /**
   * [Button Structure](https://discord.com/developers/docs/interactions/message-components#button-object)
   * @param {string} str Basic: unique_id, Link: URL, SKU: sku_id
   * @param {string} label The label to be displayed on the button. max 80 characters - Ignore: SKU
   * @param {"Primary" | "Secondary" | "Success" | "Danger" | "Link" | "SKU"} [button_style="Primary"]
   */
  constructor(str, labels, button_style = "Primary") {
    const style = buttonStyleNum[button_style] || 1;
    const custom_id = str + CUSTOM_ID_SEPARATOR;
    const isArrayLabels = isArray(labels);
    const label = isArrayLabels ? labels[1] : labels;
    let obj;
    switch (style) {
      case 5:
        obj = { type: 2, label, style, url: str };
        break;
      case 6:
        obj = { type: 2, style, sku_id: str };
        break;
      default:
        ifThrowHasSemicolon(str);
        obj = { type: 2, label, style, custom_id };
    }
    super(obj);
    this.#style = button_style;
    this.#uniqueStr = custom_id;
    if (isArrayLabels) this.emoji(labels[0]);
  }
  /**
   * available: Primary, Secondary, Success, Danger, Link
   * @param {string | APIMessageComponentEmoji} e
   * @returns {this}
   */
  emoji(e) {
    return this.#assign("emoji", ["SKU"], { emoji: isString(e) ? { name: e } : e });
  }
  /**
   * available: Primary, Secondary, Success, Danger
   * @param {string} e
   * @returns {this}
   */
  custom_id(e) {
    return this.#assign("custom_id", ["Link", "SKU"], { custom_id: this.#uniqueStr + e });
  }
  /**
   * available: ALL
   * @param {boolean} [e=true]
   * @returns {this}
   */
  disabled(e = true) {
    return this.a({ disabled: e });
  }
  /**
   * Overwrite label
   *
   * available: Primary, Secondary, Success, Danger, Link
   * @param {string} e
   * @returns {this}
   */
  label(e) {
    return this.#assign("label", ["SKU"], { label: e });
  }
  /**
   * Overwrite button style
   *
   * available: Primary, Secondary, Success, Danger
   * @param {"Primary" | "Secondary" | "Success" | "Danger"} e
   * @returns {this}
   */
  style(e) {
    return this.#assign("style", ["Link", "SKU"], { style: buttonStyleNum[e] });
  }
};
var Select = class extends Builder {
  #type;
  #uniqueStr = "";
  #assign(method, doType, obj) {
    if (!doType.includes(this.#type)) {
      warnBuilder("Select", this.#type, method);
      return this;
    }
    return this.a(obj);
  }
  /**
   * [Select Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object)
   * @param {string} unique_id
   * @param {"String" | "User" | "Role" | "Mentionable" | "Channel"} [selectType="String"]
   */
  constructor(unique_id, select_type = "String") {
    ifThrowHasSemicolon(unique_id);
    const typeNum = {
      String: 3,
      User: 5,
      Role: 6,
      Mentionable: 7,
      Channel: 8
    };
    const custom_id = unique_id + CUSTOM_ID_SEPARATOR;
    super({ type: typeNum[select_type], custom_id });
    this.#type = select_type;
    this.#uniqueStr = custom_id;
  }
  /**
   * available: ALL
   * @param {string} e
   * @returns {this}
   */
  custom_id(e) {
    return this.a({ custom_id: this.#uniqueStr + e });
  }
  /**
   * required: String
   *
   * [Select Option Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure)
   * @param {APISelectMenuOption} e
   * @returns {this}
   */
  options(...e) {
    return this.#assign("options", ["String"], { options: e });
  }
  /**
   * available: Channel
   *
   * [Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
   * @param {...ChannelType} e
   * @returns {this}
   */
  channel_types(...e) {
    return this.#assign("channel_types", ["Channel"], { channel_types: e });
  }
  /**
   * Custom placeholder text if nothing is selected, max 150 characters
   * @param {string} e
   * @returns {this}
   */
  placeholder(e) {
    return this.a({ placeholder: e });
  }
  /**
   * available: User, Role, Channel, Mentionable
   *
   * [Select Default Value Structure](https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure)
   * @param {...{ id: string, type: "user" | "role" | "channel" }} e
   * @returns {this}
   */
  default_values(...e) {
    return this.#assign("default_values", ["User", "Role", "Channel", "Mentionable"], { default_values: e });
  }
  /**
   * The minimum number of items that must be chosen; min 0, max 25
   * @param {number} [e=1]
   * @returns {this}
   */
  min_values(e = 1) {
    return this.a({ min_values: e });
  }
  /**
   * The maximum number of items that can be chosen; max 25
   * @param {number} [e=1]
   * @returns {this}
   */
  max_values(e = 1) {
    return this.a({ max_values: e });
  }
  /**
   * Disable the select
   * @param {boolean} [e=true]
   * @returns {this}
   */
  disabled(e = true) {
    return this.a({ disabled: e });
  }
};

// src/builders/components-v2.ts
var LayoutImpl = class extends Builder {
  /**
   * required: flags("IS_COMPONENTS_V2")
   *
   * [Layout Style Structure](https://discord.com/developers/docs/components/reference#component-object)
   * @param {"Action Row" | "Section" | "Separator" | "Container"} style
   */
  constructor(style) {
    const typeNum = {
      "Action Row": 1,
      Section: 9,
      Separator: 14,
      Container: 17
    };
    super({ type: typeNum[style] });
  }
  /**
   * available: ALL
   * @param {number} e
   * @returns {this}
   */
  id(e) {
    return this.a({ id: e });
  }
  /**
   * required: [Action Row](https://discord.com/developers/docs/components/reference#action-row-action-row-structure), [Section](https://discord.com/developers/docs/components/reference#section-section-structure), [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
   * @param e
   * @returns {this}
   */
  components(...e) {
    return this.a({ components: e.map(toJSON) });
  }
  /**
   * available: [Section](https://discord.com/developers/docs/components/reference#section-section-structure)
   * @param {APIButtonComponent | APIThumbnailComponent} e
   * @returns {this}
   */
  accessory(e) {
    return this.a({ accessory: toJSON(e) });
  }
  /**
   * available: [Separator](https://discord.com/developers/docs/components/reference#separator-separator-structure)
   * @param {boolean} e
   * @returns {this}
   */
  divider(e) {
    return this.a({ divider: e });
  }
  /**
   * available: [Separator](https://discord.com/developers/docs/components/reference#separator-separator-structure)
   * @param {1 | 2} e
   * @returns {this}
   */
  spacing(e) {
    return this.a({ spacing: e });
  }
  /**
   * available: [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
   * @param {number} e
   * @returns {this}
   */
  accent_color(e) {
    return this.a({ accent_color: e });
  }
  /**
   * available: [Container](https://discord.com/developers/docs/components/reference#container-container-structure)
   * @param {boolean} [e=true] default: true
   * @returns {this}
   */
  // @ts-expect-error
  spoiler(e = true) {
    return this.a({ spoiler: e });
  }
};
var Layout = LayoutImpl;
var mediaItem = (str) => ({
  url: URL.canParse(str) || str.startsWith("attachment://") ? str : `attachment://${str}`
});
var ContentImpl = class extends Builder {
  /**
   * required: flags("IS_COMPONENTS_V2")
   *
   * [Content Style Structure](https://discord.com/developers/docs/components/reference#component-object)
   * @param data
   * @param {"Text Display" | "Thumbnail" | "Media Gallery" | "File"} style
   */
  constructor(data, style = "Text Display") {
    switch (style) {
      case "Thumbnail":
        super({ type: 11, media: isString(data) ? mediaItem(data) : data });
        break;
      case "Media Gallery": {
        const items = isArray(data) ? data : [data];
        super({
          type: 12,
          items: items.map((item) => isString(item) ? { media: mediaItem(item) } : item)
        });
        break;
      }
      case "File":
        super({ type: 13, file: isString(data) ? mediaItem(data) : data });
        break;
      default:
        super({ type: 10, content: data });
    }
  }
  /**
   * available: ALL
   * @param {number} e
   * @returns {this}
   */
  id(e) {
    return this.a({ id: e });
  }
  /**
   * available: [Thumbnail](https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure)
   * @param {string} e
   * @returns {this}
   */
  description(e) {
    return this.a({ description: e });
  }
  /**
   * available: [Thumbnail](https://discord.com/developers/docs/components/reference#thumbnail-thumbnail-structure), [File](https://discord.com/developers/docs/components/reference#file-file-structure)
   * @param {string} e
   * @returns {this}
   */
  // @ts-expect-error
  spoiler(e = true) {
    return this.a({ spoiler: e });
  }
};
var Content = ContentImpl;

// src/builders/embed.ts
var Embed = class extends Builder {
  /**
   * [Embed Structure](https://discord.com/developers/docs/resources/message#embed-object)
   */
  constructor() {
    super({});
  }
  /**
   * @param {string} e Length limit: 256 characters
   * @returns {this}
   */
  title(e) {
    return this.a({ title: e });
  }
  /**
   * @deprecated Embed types should be considered deprecated and might be removed in a future API version
   * @param {EmbedType} e
   * @returns {this}
   */
  type(e) {
    return this.a({ type: e });
  }
  /**
   * @param {string} e Length limit: 4096 characters
   * @returns {this}
   */
  description(e) {
    return this.a({ description: e });
  }
  /**
   * @param {string} e
   * @returns {this}
   */
  url(e) {
    return this.a({ url: e });
  }
  /**
   * @param {string} e ISO8601 timestamp
   * @returns {this}
   */
  timestamp(e) {
    return this.a({ timestamp: e });
  }
  /**
   * @param {number} e
   * @returns {this}
   */
  color(e) {
    return this.a({ color: e });
  }
  /**
   * [Footer Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure)
   * @param {NonNullable<APIEmbed["footer"]>} e
   * @returns {this}
   */
  footer(e) {
    return this.a({ footer: e });
  }
  /**
   * [Image Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure)
   * @param {NonNullable<APIEmbed["image"]>} e
   * @returns {this}
   */
  image(e) {
    return this.a({ image: e });
  }
  /**
   * [Thumbnail Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-thumbnail-structure)
   * @param {NonNullable<APIEmbed["thumbnail"]>} e
   * @returns {this}
   */
  thumbnail(e) {
    return this.a({ thumbnail: e });
  }
  /**
   * [Video Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure)
   * @param {NonNullable<APIEmbed["video"]>} e
   * @returns {this}
   */
  video(e) {
    return this.a({ video: e });
  }
  /**
   * [Provider Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure)
   * @param {NonNullable<APIEmbed["provider"]>} e
   * @returns {this}
   */
  provider(e) {
    return this.a({ provider: e });
  }
  /**
   * [Author Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure)
   * @param {NonNullable<APIEmbed["author"]>} e
   * @returns {this}
   */
  author(e) {
    return this.a({ author: e });
  }
  /**
   * [Field Structure](https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure)
   * @param {...APIEmbedField} e Length limit: 25 field objects
   * @returns {this}
   */
  fields(...e) {
    return this.a({ fields: e });
  }
};

// src/builders/modal.ts
var Modal = class {
  #uniqueStr;
  #data;
  /**
   * @param {string} unique_id
   * @param {string} title
   */
  constructor(unique_id, title) {
    ifThrowHasSemicolon(unique_id);
    this.#uniqueStr = unique_id + CUSTOM_ID_SEPARATOR;
    this.#data = { title, custom_id: this.#uniqueStr, components: [] };
  }
  /**
   * export json data
   * @returns {APIModalInteractionResponseCallbackData}
   */
  toJSON() {
    return this.#data;
  }
  /**
   * @param {string} e
   * @returns {this}
   */
  custom_id(e) {
    this.#data.custom_id = this.#uniqueStr + e;
    return this;
  }
  /**
   * @param {...(TextInput | APITextInputComponent)} e
   * @returns {this}
   */
  row(...e) {
    this.#data.components.push({
      type: 1,
      components: e.map(toJSON)
    });
    return this;
  }
  /**
   * Overwrite title
   * @param {string} e
   * @returns {this}
   */
  title(e) {
    this.#data.title = e;
    return this;
  }
};
var TextInput = class extends Builder {
  /**
   * [Text Input Structure](https://discord.com/developers/docs/interactions/message-components#text-input-object)
   * @param {string} custom_id
   * @param {string} label
   * @param {"Single" | "Multi"} [input_style="Single"]
   */
  constructor(custom_id, label, input_style) {
    super({ type: 4, custom_id, label, style: input_style === "Multi" ? 2 : 1 });
  }
  /**
   * @param {number} e
   * @returns {this}
   */
  min_length(e) {
    return this.a({ min_length: e });
  }
  /**
   * @param {number} e
   * @returns {this}
   */
  max_length(e) {
    return this.a({ max_length: e });
  }
  /**
   * Whether or not this text input is required or not
   * @param {boolean} [e=true]
   * @returns {this}
   */
  required(e = true) {
    return this.a({ required: e });
  }
  /**
   * The pre-filled text in the text input
   * @param {string} e
   * @returns {this}
   */
  value(e) {
    return this.a({ value: e });
  }
  /**
   * @param {string} e
   * @returns {this}
   */
  placeholder(e) {
    return this.a({ placeholder: e });
  }
};

// src/builders/poll.ts
var answersRemap = (answers) => answers.map((e) => ({
  poll_media: isArray(e) ? { emoji: isString(e[0]) ? { id: null, name: e[0] } : e[0], text: e[1] } : { text: e }
}));
var Poll = class extends Builder {
  constructor(question = "", ...answers) {
    super({ question: { text: question }, answers: answersRemap(answers) });
  }
  /**
   * overwrite question
   * @param {string} question
   * @returns {this}
   */
  question(question) {
    return this.a({ question: { text: question } });
  }
  /**
   * overwrite answers
   * @param {string | [string | APIPartialEmoji, string]} answers
   * @returns {this}
   */
  answers(...answers) {
    return this.a({ answers: answersRemap(answers) });
  }
  /**
   * Number of hours the poll should be open for, up to 32 days. Defaults to 24
   * @param {number} duration
   * @returns {this}
   */
  duration(duration = 24) {
    return this.a({ duration });
  }
  /**
   * Whether a user can select multiple answers.
   * @param {boolean} allow_multiselect
   * @returns {this}
   */
  allow_multiselect(allow_multiselect = true) {
    return this.a({ allow_multiselect });
  }
  /**
   * https://discord.com/developers/docs/resources/poll#layout-type
   * @param {number} layout_type
   * @returns {this}
   */
  layout_type(layout_type) {
    return this.a({ layout_type });
  }
};

// src/rest/rest.ts
var API_VER = "v10";
var createRest = (token) => (
  /**
   * [Documentation](https://discord-hono.luis.fun/interactions/rest/)
   * @param {RestMethod} method
   * @param {RestPath<any>} path Official document path
   * @param {(string | Record<string, any>)[]} variables Variable part of official document path
   * @param {Record<string, any> | Record<string, any>[]} data
   * @param {FileData} file
   * @returns {Promise<Response>}
   */
  (method, path, variables = [], data, file) => {
    if (!token) throw newError("REST", "DISCORD_TOKEN");
    const vars = variables.filter((v) => isString(v));
    const headers = { Authorization: `Bot ${token}` };
    if (!file) headers["content-type"] = "application/json";
    const requestInit = { method, headers };
    if (method.toUpperCase() !== "GET")
      requestInit.body = file ? formData(prepareData(data), file) : JSON.stringify(prepareData(data));
    return fetch(
      `https://discord.com/api/${API_VER + path.replace(/\{[^}]*\}/g, () => vars.shift() ?? "") + queryStringify(variables.find((v) => !isString(v)))}`,
      requestInit
    );
  }
);

// src/rest/rest-path.ts
var $webhooks$_$_ = "/webhooks/{}/{}";
var $webhooks$_$_$messages$_ = "/webhooks/{}/{}/messages/{}";
var _webhooks_$_$ = $webhooks$_$_;
var _webhooks_$_$_messages_$ = $webhooks$_$_$messages$_;
var $interactions$_$_$callback = "/interactions/{interaction.id}/{interaction.token}/callback";
var $webhooks$_$_$messages$original = "/webhooks/{}/{}/messages/@original";
var _interactions_$_$_callback = $interactions$_$_$callback;
var _webhooks_$_$_messages_original = $webhooks$_$_$messages$original;
var $applications$_$commands = "/applications/{application.id}/commands";
var $applications$_$commands$_ = "/applications/{application.id}/commands/{command.id}";
var $applications$_$guilds$_$commands = "/applications/{application.id}/guilds/{guild.id}/commands";
var $applications$_$guilds$_$commands$_ = "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}";
var $applications$_$guilds$_$commands$permissions = "/applications/{application.id}/guilds/{guild.id}/commands/permissions";
var $applications$_$guilds$_$commands$_$permissions = "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}/permissions";
var _applications_$_commands = $applications$_$commands;
var _applications_$_commands_$ = $applications$_$commands$_;
var _applications_$_guilds_$_commands = $applications$_$guilds$_$commands;
var _applications_$_guilds_$_commands_$ = $applications$_$guilds$_$commands$_;
var _applications_$_guilds_$_commands_permissions = $applications$_$guilds$_$commands$permissions;
var _applications_$_guilds_$_commands_$_permissions = $applications$_$guilds$_$commands$_$permissions;
var $applications$me = "/applications/@me";
var $applications$_$activityinstances$_ = "/applications/{application.id}/activity-instances/{instance_id}";
var _applications_me = $applications$me;
var _applications_$_activityinstances_$ = $applications$_$activityinstances$_;
var $applications$_$roleconnections$metadata = "/applications/{application.id}/role-connections/metadata";
var _applications_$_roleconnections_metadata = $applications$_$roleconnections$metadata;
var $guilds$_$auditlogs = "/guilds/{guild.id}/audit-logs";
var _guilds_$_auditlogs = $guilds$_$auditlogs;
var $guilds$_$automoderation$rules = "/guilds/{guild.id}/auto-moderation/rules";
var $guilds$_$automoderation$rules$_ = "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}";
var _guilds_$_automoderation_rules = $guilds$_$automoderation$rules;
var _guilds_$_automoderation_rules_$ = $guilds$_$automoderation$rules$_;
var $channels$_ = "/channels/{channel.id}";
var $channels$_$permissions$_ = "/channels/{channel.id}/permissions/{overwrite.id}";
var $channels$_$invites = "/channels/{channel.id}/invites";
var $channels$_$followers = "/channels/{channel.id}/followers";
var $channels$_$typing = "/channels/{channel.id}/typing";
var $channels$_$pins = "/channels/{channel.id}/pins";
var $channels$_$pins$_ = "/channels/{channel.id}/pins/{message.id}";
var $channels$_$recipients$_ = "/channels/{channel.id}/recipients/{user.id}";
var $channels$_$messages$_$threads = "/channels/{channel.id}/messages/{message.id}/threads";
var $channels$_$threads = "/channels/{channel.id}/threads";
var $channels$_$threadmembers$me = "/channels/{channel.id}/thread-members/@me";
var $channels$_$threadmembers$_ = "/channels/{channel.id}/thread-members/{user.id}";
var $channels$_$threadmembers = "/channels/{channel.id}/thread-members";
var $channels$_$threads$archived$public = "/channels/{channel.id}/threads/archived/public";
var $channels$_$threads$archived$private = "/channels/{channel.id}/threads/archived/private";
var $channels$_$users$me$threads$archived$private = "/channels/{channel.id}/users/@me/threads/archived/private";
var _channels_$ = $channels$_;
var _channels_$_permissions_$ = $channels$_$permissions$_;
var _channels_$_invites = $channels$_$invites;
var _channels_$_followers = $channels$_$followers;
var _channels_$_typing = $channels$_$typing;
var _channels_$_pins = $channels$_$pins;
var _channels_$_pins_$ = $channels$_$pins$_;
var _channels_$_recipients_$ = $channels$_$recipients$_;
var _channels_$_messages_$_threads = $channels$_$messages$_$threads;
var _channels_$_threads = $channels$_$threads;
var _channels_$_threadmembers_me = $channels$_$threadmembers$me;
var _channels_$_threadmembers_$ = $channels$_$threadmembers$_;
var _channels_$_threadmembers = $channels$_$threadmembers;
var _channels_$_threads_archived_public = $channels$_$threads$archived$public;
var _channels_$_threads_archived_private = $channels$_$threads$archived$private;
var _channels_$_users_me_threads_archived_private = $channels$_$users$me$threads$archived$private;
var $guilds$_$emojis = "/guilds/{guild.id}/emojis";
var $guilds$_$emojis$_ = "/guilds/{guild.id}/emojis/{emoji.id}";
var $applications$_$emojis = "/applications/{application.id}/emojis";
var $applications$_$emojis$_ = "/applications/{application.id}/emojis/{emoji.id}";
var _guilds_$_emojis = $guilds$_$emojis;
var _guilds_$_emojis_$ = $guilds$_$emojis$_;
var _applications_$_emojis = $applications$_$emojis;
var _applications_$_emojis_$ = $applications$_$emojis$_;
var $applications$_$entitlements = "/applications/{application.id}/entitlements";
var $applications$_$entitlements$_ = "/applications/{application.id}/entitlements/{entitlement.id}";
var $applications$_$entitlements$_$consume = "/applications/{application.id}/entitlements/{entitlement.id}/consume";
var _applications_$_entitlements = $applications$_$entitlements;
var _applications_$_entitlements_$ = $applications$_$entitlements$_;
var _applications_$_entitlements_$_consume = $applications$_$entitlements$_$consume;
var $guilds = "/guilds";
var $guilds$_ = "/guilds/{guild.id}";
var $guilds$_$preview = "/guilds/{guild.id}/preview";
var $guilds$_$channels = "/guilds/{guild.id}/channels";
var $guilds$_$threads$active = "/guilds/{guild.id}/threads/active";
var $guilds$_$members$_ = "/guilds/{guild.id}/members/{user.id}";
var $guilds$_$members = "/guilds/{guild.id}/members";
var $guilds$_$members$search = "/guilds/{guild.id}/members/search";
var $guilds$_$members$me = "/guilds/{guild.id}/members/@me";
var $guilds$_$members$me$nick = "/guilds/{guild.id}/members/@me/nick";
var $guilds$_$members$_$roles$_ = "/guilds/{guild.id}/members/{user.id}/roles/{role.id}";
var $guilds$_$bans = "/guilds/{guild.id}/bans";
var $guilds$_$bans$_ = "/guilds/{guild.id}/bans/{user.id}";
var $guilds$_$bulkban = "/guilds/{guild.id}/bulk-ban";
var $guilds$_$roles = "/guilds/{guild.id}/roles";
var $guilds$_$roles$_ = "/guilds/{guild.id}/roles/{role.id}";
var $guilds$_$mfa = "/guilds/{guild.id}/mfa";
var $guilds$_$prune = "/guilds/{guild.id}/prune";
var $guilds$_$regions = "/guilds/{guild.id}/regions";
var $guilds$_$invites = "/guilds/{guild.id}/invites";
var $guilds$_$integrations = "/guilds/{guild.id}/integrations";
var $guilds$_$integrations$_ = "/guilds/{guild.id}/integrations/{integration.id}";
var $guilds$_$widget = "/guilds/{guild.id}/widget";
var $guilds$_$widgetjson = "/guilds/{guild.id}/widget.json";
var $guilds$_$vanityurl = "/guilds/{guild.id}/vanity-url";
var $guilds$_$widgetpng = "/guilds/{guild.id}/widget.png";
var $guilds$_$welcomescreen = "/guilds/{guild.id}/welcome-screen";
var $guilds$_$onboarding = "/guilds/{guild.id}/onboarding";
var $guilds$_$incidentactions = "/guilds/{guild.id}/incident-actions";
var _guilds = $guilds;
var _guilds_$ = $guilds$_;
var _guilds_$_preview = $guilds$_$preview;
var _guilds_$_channels = $guilds$_$channels;
var _guilds_$_threads_active = $guilds$_$threads$active;
var _guilds_$_members_$ = $guilds$_$members$_;
var _guilds_$_members = $guilds$_$members;
var _guilds_$_members_search = $guilds$_$members$search;
var _guilds_$_members_me = $guilds$_$members$me;
var _guilds_$_members_me_nick = $guilds$_$members$me$nick;
var _guilds_$_members_$_roles_$ = $guilds$_$members$_$roles$_;
var _guilds_$_bans = $guilds$_$bans;
var _guilds_$_bans_$ = $guilds$_$bans$_;
var _guilds_$_bulkban = $guilds$_$bulkban;
var _guilds_$_roles = $guilds$_$roles;
var _guilds_$_roles_$ = $guilds$_$roles$_;
var _guilds_$_mfa = $guilds$_$mfa;
var _guilds_$_prune = $guilds$_$prune;
var _guilds_$_regions = $guilds$_$regions;
var _guilds_$_invites = $guilds$_$invites;
var _guilds_$_integrations = $guilds$_$integrations;
var _guilds_$_integrations_$ = $guilds$_$integrations$_;
var _guilds_$_widget = $guilds$_$widget;
var _guilds_$_widgetjson = $guilds$_$widgetjson;
var _guilds_$_vanityurl = $guilds$_$vanityurl;
var _guilds_$_widgetpng = $guilds$_$widgetpng;
var _guilds_$_welcomescreen = $guilds$_$welcomescreen;
var _guilds_$_onboarding = $guilds$_$onboarding;
var _guilds_$_incidentactions = $guilds$_$incidentactions;
var $guilds$_$scheduledevents = "/guilds/{guild.id}/scheduled-events";
var $guilds$_$scheduledevents$_ = "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}";
var $guilds$_$scheduledevents$_$users = "/guilds/{guild.id}/scheduled-events/{guild_scheduled_event.id}/users";
var _guilds_$_scheduledevents = $guilds$_$scheduledevents;
var _guilds_$_scheduledevents_$ = $guilds$_$scheduledevents$_;
var _guilds_$_scheduledevents_$_users = $guilds$_$scheduledevents$_$users;
var $guilds$templates$_ = "/guilds/templates/{template.code}";
var $guilds$_$templates = "/guilds/{guild.id}/templates";
var $guilds$_$templates$_ = "/guilds/{guild.id}/templates/{template.code}";
var _guilds_templates_$ = $guilds$templates$_;
var _guilds_$_templates = $guilds$_$templates;
var _guilds_$_templates_$ = $guilds$_$templates$_;
var $invites$_ = "/invites/{invite.code}";
var _invites_$ = $invites$_;
var $channels$_$messages = "/channels/{channel.id}/messages";
var $channels$_$messages$_ = "/channels/{channel.id}/messages/{message.id}";
var $channels$_$messages$_$crosspost = "/channels/{channel.id}/messages/{message.id}/crosspost";
var $channels$_$messages$_$reactions$_$me = "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me";
var $channels$_$messages$_$reactions$_$_ = "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}";
var $channels$_$messages$_$reactions$_ = "/channels/{channel.id}/messages/{message.id}/reactions/{emoji}";
var $channels$_$messages$_$reactions = "/channels/{channel.id}/messages/{message.id}/reactions";
var $channels$_$messages$bulkdelete = "/channels/{channel.id}/messages/bulk-delete";
var _channels_$_messages = $channels$_$messages;
var _channels_$_messages_$ = $channels$_$messages$_;
var _channels_$_messages_$_crosspost = $channels$_$messages$_$crosspost;
var _channels_$_messages_$_reactions_$_me = $channels$_$messages$_$reactions$_$me;
var _channels_$_messages_$_reactions_$_$ = $channels$_$messages$_$reactions$_$_;
var _channels_$_messages_$_reactions_$ = $channels$_$messages$_$reactions$_;
var _channels_$_messages_$_reactions = $channels$_$messages$_$reactions;
var _channels_$_messages_bulkdelete = $channels$_$messages$bulkdelete;
var $channels$_$polls$_$answers$_ = "/channels/{channel.id}/polls/{message.id}/answers/{answer_id}";
var $channels$_$polls$_$expire = "/channels/{channel.id}/polls/{message.id}/expire";
var _channels_$_polls_$_answers_$ = $channels$_$polls$_$answers$_;
var _channels_$_polls_$_expire = $channels$_$polls$_$expire;
var $applications$_$skus = "/applications/{application.id}/skus";
var _applications_$_skus = $applications$_$skus;
var $channels$_$sendsoundboardsound = "/channels/{channel.id}/send-soundboard-sound";
var $soundboarddefaultsounds = "/soundboard-default-sounds";
var $guilds$_$soundboardsounds = "/guilds/{guild.id}/soundboard-sounds";
var $guilds$_$soundboardsounds$_ = "/guilds/{guild.id}/soundboard-sounds/{sound.id}";
var _channels_$_sendsoundboardsound = $channels$_$sendsoundboardsound;
var _soundboarddefaultsounds = $soundboarddefaultsounds;
var _guilds_$_soundboardsounds = $guilds$_$soundboardsounds;
var _guilds_$_soundboardsounds_$ = $guilds$_$soundboardsounds$_;
var $stageinstances = "/stage-instances";
var $stageinstances$_ = "/stage-instances/{channel.id}";
var _stageinstances = $stageinstances;
var _stageinstances_$ = $stageinstances$_;
var $stickers$_ = "/stickers/{sticker.id}";
var $stickerpacks = "/sticker-packs";
var $stickerpacks$_ = "/sticker-packs/{pack.id}";
var $guilds$_$stickers = "/guilds/{guild.id}/stickers";
var $guilds$_$stickers$_ = "/guilds/{guild.id}/stickers/{sticker.id}";
var _stickers_$ = $stickers$_;
var _stickerpacks = $stickerpacks;
var _stickerpacks_$ = $stickerpacks$_;
var _guilds_$_stickers = $guilds$_$stickers;
var _guilds_$_stickers_$ = $guilds$_$stickers$_;
var $skus$_$subscriptions = "/skus/{sku.id}/subscriptions";
var $skus$_$subscriptions$_ = "/skus/{sku.id}/subscriptions/{subscription.id}";
var _skus_$_subscriptions = $skus$_$subscriptions;
var _skus_$_subscriptions_$ = $skus$_$subscriptions$_;
var $users$me = "/users/@me";
var $users$_ = "/users/{user.id}";
var $users$me$guilds = "/users/@me/guilds";
var $users$me$guilds$_$member = "/users/@me/guilds/{guild.id}/member";
var $users$me$guilds$_ = "/users/@me/guilds/{guild.id}";
var $users$me$channels = "/users/@me/channels";
var $users$me$connections = "/users/@me/connections";
var $users$me$applications$_$roleconnection = "/users/@me/applications/{application.id}/role-connection";
var _users_me = $users$me;
var _users_$ = $users$_;
var _users_me_guilds = $users$me$guilds;
var _users_me_guilds_$_member = $users$me$guilds$_$member;
var _users_me_guilds_$ = $users$me$guilds$_;
var _users_me_channels = $users$me$channels;
var _users_me_connections = $users$me$connections;
var _users_me_applications_$_roleconnection = $users$me$applications$_$roleconnection;
var $voice$regions = "/voice/regions";
var $guilds$_$voicestates$me = "/guilds/{guild.id}/voice-states/@me";
var $guilds$_$voicestates$_ = "/guilds/{guild.id}/voice-states/{user.id}";
var _voice_regions = $voice$regions;
var _guilds_$_voicestates_me = $guilds$_$voicestates$me;
var _guilds_$_voicestates_$ = $guilds$_$voicestates$_;
var $channels$_$webhooks = "/channels/{channel.id}/webhooks";
var $guilds$_$webhooks = "/guilds/{guild.id}/webhooks";
var $webhooks$_ = "/webhooks/{webhook.id}";
var $webhooks$_$_$slack = "/webhooks/{webhook.id}/{webhook.token}/slack";
var $webhooks$_$_$github = "/webhooks/{webhook.id}/{webhook.token}/github";
var _channels_$_webhooks = $channels$_$webhooks;
var _guilds_$_webhooks = $guilds$_$webhooks;
var _webhooks_$ = $webhooks$_;
var _webhooks_$_$_slack = $webhooks$_$_$slack;
var _webhooks_$_$_github = $webhooks$_$_$github;

// src/context.ts
var Context = class {
  #env;
  #executionCtx;
  #discord;
  #key;
  #var = /* @__PURE__ */ new Map();
  #rest = void 0;
  // interaction
  #interaction;
  #flags = {};
  // 235
  #sub = { group: "", command: "", string: "" };
  // 24
  #update = false;
  // 3
  #focused;
  // 4
  #throwIfNotAllowType(allowType) {
    if (!allowType.includes(this.#interaction.type)) throw newError("c.***", "Invalid method");
  }
  constructor(env, executionCtx, discord, key, interaction) {
    this.#env = env;
    this.#executionCtx = executionCtx;
    this.#discord = discord;
    this.#key = key;
    this.#interaction = interaction;
    switch (interaction.type) {
      case 2:
      case 4: {
        let options;
        if ("options" in interaction.data) {
          options = interaction.data.options;
          if (options?.[0]?.type === 2) {
            this.#sub.group = options[0].name;
            this.#sub.string = `${options[0].name} `;
            options = options[0].options;
          }
          if (options?.[0]?.type === 1) {
            this.#sub.command = options[0].name;
            this.#sub.string += options[0].name;
            options = options[0].options;
          }
        }
        if (options)
          for (const e of options) {
            const { type } = e;
            if ((type === 3 || type === 4 || type === 10) && e.focused) this.#focused = e;
            this.set(e.name, e.value);
          }
        break;
      }
      // @ts-expect-error
      // biome-ignore lint: case 5 extracts custom_id in the same way as case 3.
      case 5: {
        const modalRows = interaction.data?.components;
        if (modalRows)
          for (const row of modalRows) {
            for (const modal of row.components ?? [row.component]) this.set(modal.custom_id, modal.value);
          }
      }
      case 3:
        ;
        this.set("custom_id", interaction.data?.custom_id);
        if ("values" in interaction.data) this.set(key, interaction.data.values);
    }
  }
  /**
   * Environment Variables
   */
  get env() {
    return this.#env;
  }
  get event() {
    if (!(this.#executionCtx && "respondWith" in this.#executionCtx)) throw newError("c.event", "not found");
    return this.#executionCtx;
  }
  get executionCtx() {
    if (!this.#executionCtx) throw newError("c.executionCtx", "not found");
    return this.#executionCtx;
  }
  /**
   * Handler triggered string
   */
  get key() {
    return this.#key;
  }
  set(key, value) {
    this.#var.set(key, value);
  }
  get(key) {
    return this.#var.get(key);
  }
  /**
   * Variables object
   */
  get var() {
    return Object.fromEntries(this.#var);
  }
  /**
   * `c.rest` = `createRest(c.env.DISCORD_TOKEN)`
   */
  get rest() {
    this.#rest ??= createRest(this.#discord.TOKEN);
    return this.#rest;
  }
  /**
   * [Interaction Object](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object)
   */
  get interaction() {
    return this.#interaction;
  }
  /**
   * [Message Flags](https://discord.com/developers/docs/resources/message#message-object-message-flags)
   * @param {"SUPPRESS_EMBEDS" | "EPHEMERAL" | "SUPPRESS_NOTIFICATIONS" | "IS_COMPONENTS_V2"} flag
   * @returns {this}
   * @example
   * ```ts
   * return c.flags('SUPPRESS_EMBEDS', 'EPHEMERAL').res('[Docs](https://example.com)')
   * ```
   */
  flags(...flag) {
    this.#throwIfNotAllowType([2, 3, 5]);
    this.#flags.flags = messageFlags(...flag);
    return this;
  }
  /**
   * @param data [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure)
   * @param file File: { blob: Blob, name: string } | { blob: Blob, name: string }[]
   * @returns {Response}
   */
  res(data, file) {
    this.#throwIfNotAllowType([2, 3, 5]);
    const body = {
      data: { ...this.#flags, ...prepareData(data) },
      type: this.#update ? 7 : 4
    };
    return file ? new Response(formData(body, file)) : Response.json(body);
  }
  /**
   * ACK an interaction and edit a response later, the user sees a loading state
   * @param {(c: This) => Promise<unknown>} handler
   * @returns {Response}
   * @example
   * ```ts
   * return c.resDefer(c => c.followup('Delayed Message'))
   * ```
   */
  resDefer(handler) {
    this.#throwIfNotAllowType([2, 3, 5]);
    if (handler) this.executionCtx.waitUntil(handler(this));
    return Response.json(
      this.#update ? { type: 6 } : {
        type: 5,
        data: this.#flags
      }
    );
  }
  /**
   * Launch the Activity associated with the app. Only available for apps with Activities enabled
   * @returns {Response}
   */
  resActivity() {
    this.#throwIfNotAllowType([2, 3, 5]);
    return Response.json({ type: 12 });
  }
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
  followup(data, file) {
    this.#throwIfNotAllowType([2, 3, 5]);
    if (!this.#discord.APPLICATION_ID) throw newError("c.followup", "DISCORD_APPLICATION_ID");
    const pathVars = [this.#discord.APPLICATION_ID, this.interaction.token];
    if (data || file)
      return this.rest(
        "PATCH",
        $webhooks$_$_$messages$original,
        pathVars,
        { ...this.#flags, ...prepareData(data || {}) },
        file
      );
    return this.rest("DELETE", $webhooks$_$_$messages$original, pathVars);
  }
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
  get sub() {
    this.#throwIfNotAllowType([2, 4]);
    return this.#sub;
  }
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
  resModal(data) {
    this.#throwIfNotAllowType([2, 3]);
    return Response.json({ type: 9, data: toJSON(data) });
  }
  /**
   * for components, change `c.res()` and `c.resDefer()` to a [Callback Type](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type) that edits the original message
   * @param {boolean} [bool=true]
   * @returns {this}
   * @example
   * ```ts
   * return c.update().res('Edit the original message')
   * ```
   */
  update(bool = true) {
    this.#throwIfNotAllowType([3, 5]);
    this.#update = bool;
    return this;
  }
  /**
   * Focused Option
   *
   * [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-data)
   */
  get focused() {
    this.#throwIfNotAllowType([4]);
    return this.#focused;
  }
  /**
   * @param {Autocomplete | APICommandAutocompleteInteractionResponseCallbackData} data [Data Structure](https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete)
   * @returns {Response}
   */
  resAutocomplete(data) {
    this.#throwIfNotAllowType([4]);
    return Response.json({ type: 8, data: toJSON(data) });
  }
  /**
   * Get Resolved Data
   * @beta This may include breaking changes
   * @param {'attachments' | 'channels' | 'members' | 'messages' | 'roles' | 'users'} category 'attachments' | 'channels' | 'members' | 'messages' | 'roles' | 'users'
   * @param {string} id id to get specific resolved object
   * @returns resolved object or undefined
   */
  resolved(category, id) {
    this.#throwIfNotAllowType([2, 3, 4, 5]);
    const { data } = this.#interaction;
    if (!(data && "resolved" in data && data.resolved)) return void 0;
    const { resolved } = data;
    if (!id) {
      if ("type" in data) {
        if (data.type === 2 && category === "users")
          return resolved[category]?.[data.target_id];
        if (data.type === 3 && category === "messages")
          return resolved[category]?.[data.target_id];
      }
      return void 0;
    }
    return resolved[category]?.[id];
  }
};

// src/verify.ts
var hex2bin = (hex) => {
  const len = hex.length;
  const bin = new Uint8Array(len >> 1);
  for (let i = 0; i < len; i += 2) bin[i >> 1] = parseInt(hex.slice(i, i + 2), 16);
  return bin;
};
var verify = async (body, signature, timestamp, publicKey) => {
  if (!body || !signature || !timestamp) return false;
  const subtle = globalThis.crypto?.subtle;
  if (subtle === void 0) throw newError("verify", "crypto");
  return await subtle.verify(
    { name: "Ed25519" },
    await subtle.importKey("raw", hex2bin(publicKey), { name: "Ed25519" }, false, ["verify"]),
    hex2bin(signature),
    new TextEncoder().encode(timestamp + body)
  );
};

// src/discord-hono.ts
var DiscordHono = class {
  #verify;
  #discord;
  #map = /* @__PURE__ */ new Map();
  #set(num, key, value) {
    this.#map.set(`${num}${key}`, value);
    return this;
  }
  #get(num, key) {
    const handler = this.#map.get(`${num}${key}`) ?? this.#map.get(`${num}`);
    if (handler) return handler;
    throw newError("DiscordHono", "handler");
  }
  /**
   * [Documentation](https://discord-hono.luis.fun/interactions/discord-hono/)
   * @param {InitOptions} options
   */
  constructor(options) {
    this.#verify = options?.verify ?? verify;
    this.#discord = (env) => {
      const discordEnv = options?.discordEnv ? options.discordEnv(env) : {};
      return {
        APPLICATION_ID: env?.DISCORD_APPLICATION_ID,
        TOKEN: env?.DISCORD_TOKEN,
        PUBLIC_KEY: env?.DISCORD_PUBLIC_KEY,
        ...discordEnv
      };
    };
  }
  /**
   * @param {string | RegExp} command Match the first argument of `Command`
   * @param handler
   * @returns {this}
   */
  command(command, handler) {
    return this.#set(2, command, handler);
  }
  /**
   * @param {string | RegExp} component_id Match the first argument of `Button` or `Select`
   * @param handler
   * @returns {this}
   */
  component(component_id, handler) {
    return this.#set(3, component_id, handler);
  }
  /**
   * @param {string | RegExp} command Match the first argument of `Command`
   * @param autocomplete
   * @param handler
   * @returns {this}
   */
  autocomplete(command, autocomplete, handler) {
    return (handler ? this.#set(2, command, handler) : this).#set(4, command, autocomplete);
  }
  /**
   * @param {string | RegExp} modal_id Match the first argument of `Modal`
   * @param handler
   * @returns {this}
   */
  modal(modal_id, handler) {
    return this.#set(5, modal_id, handler);
  }
  /**
   * @param cron Match the crons in the toml file
   * @param handler
   * @returns {this}
   */
  cron(cron, handler) {
    return this.#set(0, cron, handler);
  }
  // Define as an arrow function to prevent incorrect `this` binding when the method is used as a callback.
  // Avoid `.bind()` to reduce code size.
  // Mainly to minimize boilerplate when mounting via honoApp.
  /**
   * @param {Request} request
   * @param {Record<string, unknown>} env
   * @param executionCtx
   * @returns {Promise<Response>}
   */
  fetch = async (request, env, executionCtx) => {
    switch (request.method) {
      case "GET":
        return new Response("Operational\u{1F525}");
      case "POST": {
        const discord = this.#discord(env);
        if (!discord.PUBLIC_KEY) throw newError("DiscordHono", "DISCORD_PUBLIC_KEY");
        const body = await request.text();
        if (!await this.#verify(
          body,
          request.headers.get("x-signature-ed25519"),
          request.headers.get("x-signature-timestamp"),
          discord.PUBLIC_KEY
        ))
          return new Response("Bad Request", { status: 401 });
        const interaction = JSON.parse(body);
        const key = (() => {
          switch (interaction.type) {
            case 2:
            case 4:
              return interaction.data.name;
            case 3:
            case 5: {
              const id = interaction.data.custom_id;
              const key2 = id.split(CUSTOM_ID_SEPARATOR)[0] ?? "";
              interaction.data.custom_id = id.slice(key2.length + 1);
              return key2;
            }
          }
          return "";
        })();
        switch (interaction.type) {
          case 1:
            return Response.json({ type: 1 });
          case 2:
          case 3:
          case 4:
          case 5:
            return await this.#get(
              interaction.type,
              key
              // @ts-expect-error ts(2345) -- ignore due to complex type inference
            )(new Context(env, executionCtx, discord, key, interaction));
        }
        return Response.json({ error: "Unknown Type" }, { status: 400 });
      }
    }
    return new Response("Not Found", { status: 404 });
  };
  // Define as an arrow function like `fetch` to preserve the `this` binding.
  /**
   * Method triggered by cloudflare workers' crons
   * @param event
   * @param {Record<string, unknown>} env
   * @param executionCtx
   */
  scheduled = async (event, env, executionCtx) => {
    const handler = this.#get(0, event.cron);
    const c = new Context(env, executionCtx, this.#discord(env), event.cron, event);
    if (executionCtx?.waitUntil) executionCtx.waitUntil(handler(c));
    else await handler(c);
  };
};

// src/helpers/create-factory.ts
var DiscordHonoExtends = class extends DiscordHono {
  loader(handlers) {
    for (const elem of handlers) {
      if ("command" in elem) {
        if ("autocomplete" in elem) this.autocomplete(elem.command.toJSON().name, elem.autocomplete, elem.handler);
        else this.command(elem.command.toJSON().name, elem.handler);
      } else if ("component" in elem) {
        const json = elem.component.toJSON();
        if ("custom_id" in json) this.component(json.custom_id.split(CUSTOM_ID_SEPARATOR)[0] ?? "", elem.handler);
      } else if ("modal" in elem)
        this.modal(elem.modal.toJSON().custom_id.split(CUSTOM_ID_SEPARATOR)[0] ?? "", elem.handler);
      else if ("cron" in elem) this.cron(elem.cron, elem.handler);
      else throw newError(".loader(obj)", "obj is Invalid");
    }
    return this;
  }
};
var createFactory = () => ({
  // biome-ignore lint/nursery/useExplicitType: omitted
  discord(init) {
    return new DiscordHonoExtends(init);
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  command(command, handler) {
    return { command, handler };
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  component(component, handler) {
    return { component, handler };
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  autocomplete(command, autocomplete, handler) {
    return {
      command,
      autocomplete,
      handler
    };
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  modal(modal, handler) {
    return { modal, handler };
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  cron(cron, handler) {
    return { cron, handler };
  },
  // biome-ignore lint/nursery/useExplicitType: omitted
  getCommands(handlers) {
    return handlers.filter((e) => "command" in e).map((e) => e.command);
  }
});

// src/helpers/register.ts
var register = async (commands, application_id, token, guild_id) => {
  if (!token) throw newError("register", "DISCORD_TOKEN");
  if (!application_id) throw newError("register", "DISCORD_APPLICATION_ID");
  const rest = createRest(token);
  const json = commands.map(toJSON);
  let res;
  if (guild_id) res = await rest("PUT", $applications$_$guilds$_$commands, [application_id, guild_id], json);
  else res = await rest("PUT", $applications$_$commands, [application_id], json);
  let logText = "";
  if (res.ok) {
    logText = "===== \u2705 Success =====";
    console.info(logText);
  } else {
    logText = `Error registering commands
${res.url}: ${res.status} ${res.statusText}`;
    try {
      const error = await res.text();
      if (error) {
        logText += `

${error}`;
      }
    } catch (e) {
      logText += `

Error reading body from request:
${e}`;
    }
    logText += "\n===== \u26A0\uFE0F Error =====";
    console.error(logText);
  }
  return logText;
};

// src/helpers/retry429.ts
var retry429 = (fetchFunc, retryCount, addDelay = 0) => {
  const retryFetch = async (count) => {
    const res = await fetchFunc();
    if (res.status !== 429 || count < 1) return res;
    const retryAfter = res.headers.get("Retry-After");
    if (!retryAfter) return res;
    const delay = Number(retryAfter) * 1e3 + addDelay;
    await new Promise((resolve) => setTimeout(resolve, Math.max(delay, 0)));
    return retryFetch(count - 1);
  };
  return retryFetch(retryCount);
};

// src/helpers/webhook.ts
var webhook = (url, data, file) => fetch(isArray(url) ? `${url[0] + queryStringify(url[1])}` : url, {
  method: "POST",
  headers: file ? {} : { "content-type": "application/json" },
  body: file ? formData(prepareData(data), file) : JSON.stringify(prepareData(data))
});

// src/test-helpers/request.ts
var testCommandRequestBodyJson = (command, options) => {
  const cmd = toJSON(command);
  const supportOptionType = [3, 4, 5, 10];
  const interaction = {
    type: 2,
    // Command Number
    // @ts-expect-error
    data: {
      name: cmd.name,
      id: "0".repeat(32),
      type: cmd.type || 1
    }
  };
  if (interaction.data.type === 1 && cmd.options) {
    if (cmd.options.every((opt) => supportOptionType.includes(opt.type))) {
      if (options) {
        interaction.data.options = [];
        for (const [name, value] of Object.entries(options)) {
          const type = cmd.options.find((opt) => opt.name === name)?.type;
          if (!type) throw newError("testCommandRequestBody", `option: "${name}" is not found`);
          interaction.data.options.push({ name, value, type });
        }
      }
    } else {
      console.warn("discord-hono(testCommandRequestBody): options are not supported yet");
    }
  }
  return interaction;
};
var testCommandRequestInit = (command, options) => ({
  method: "POST",
  headers: {
    "x-signature-ed25519": "f".repeat(128),
    "x-signature-timestamp": "1",
    "content-type": "application/json"
  },
  body: JSON.stringify(testCommandRequestBodyJson(command, options))
});

// src/test-helpers/verify.ts
var testVerifyTrue = async (...rest) => {
  await verify(...rest);
  return true;
};
export {
  $applications$_$activityinstances$_,
  $applications$_$commands,
  $applications$_$commands$_,
  $applications$_$emojis,
  $applications$_$emojis$_,
  $applications$_$entitlements,
  $applications$_$entitlements$_,
  $applications$_$entitlements$_$consume,
  $applications$_$guilds$_$commands,
  $applications$_$guilds$_$commands$_,
  $applications$_$guilds$_$commands$_$permissions,
  $applications$_$guilds$_$commands$permissions,
  $applications$_$roleconnections$metadata,
  $applications$_$skus,
  $applications$me,
  $channels$_,
  $channels$_$followers,
  $channels$_$invites,
  $channels$_$messages,
  $channels$_$messages$_,
  $channels$_$messages$_$crosspost,
  $channels$_$messages$_$reactions,
  $channels$_$messages$_$reactions$_,
  $channels$_$messages$_$reactions$_$_,
  $channels$_$messages$_$reactions$_$me,
  $channels$_$messages$_$threads,
  $channels$_$messages$bulkdelete,
  $channels$_$permissions$_,
  $channels$_$pins,
  $channels$_$pins$_,
  $channels$_$polls$_$answers$_,
  $channels$_$polls$_$expire,
  $channels$_$recipients$_,
  $channels$_$sendsoundboardsound,
  $channels$_$threadmembers,
  $channels$_$threadmembers$_,
  $channels$_$threadmembers$me,
  $channels$_$threads,
  $channels$_$threads$archived$private,
  $channels$_$threads$archived$public,
  $channels$_$typing,
  $channels$_$users$me$threads$archived$private,
  $channels$_$webhooks,
  $guilds,
  $guilds$_,
  $guilds$_$auditlogs,
  $guilds$_$automoderation$rules,
  $guilds$_$automoderation$rules$_,
  $guilds$_$bans,
  $guilds$_$bans$_,
  $guilds$_$bulkban,
  $guilds$_$channels,
  $guilds$_$emojis,
  $guilds$_$emojis$_,
  $guilds$_$incidentactions,
  $guilds$_$integrations,
  $guilds$_$integrations$_,
  $guilds$_$invites,
  $guilds$_$members,
  $guilds$_$members$_,
  $guilds$_$members$_$roles$_,
  $guilds$_$members$me,
  $guilds$_$members$me$nick,
  $guilds$_$members$search,
  $guilds$_$mfa,
  $guilds$_$onboarding,
  $guilds$_$preview,
  $guilds$_$prune,
  $guilds$_$regions,
  $guilds$_$roles,
  $guilds$_$roles$_,
  $guilds$_$scheduledevents,
  $guilds$_$scheduledevents$_,
  $guilds$_$scheduledevents$_$users,
  $guilds$_$soundboardsounds,
  $guilds$_$soundboardsounds$_,
  $guilds$_$stickers,
  $guilds$_$stickers$_,
  $guilds$_$templates,
  $guilds$_$templates$_,
  $guilds$_$threads$active,
  $guilds$_$vanityurl,
  $guilds$_$voicestates$_,
  $guilds$_$voicestates$me,
  $guilds$_$webhooks,
  $guilds$_$welcomescreen,
  $guilds$_$widget,
  $guilds$_$widgetjson,
  $guilds$_$widgetpng,
  $guilds$templates$_,
  $interactions$_$_$callback,
  $invites$_,
  $skus$_$subscriptions,
  $skus$_$subscriptions$_,
  $soundboarddefaultsounds,
  $stageinstances,
  $stageinstances$_,
  $stickerpacks,
  $stickerpacks$_,
  $stickers$_,
  $users$_,
  $users$me,
  $users$me$applications$_$roleconnection,
  $users$me$channels,
  $users$me$connections,
  $users$me$guilds,
  $users$me$guilds$_,
  $users$me$guilds$_$member,
  $voice$regions,
  $webhooks$_,
  $webhooks$_$_,
  $webhooks$_$_$github,
  $webhooks$_$_$messages$_,
  $webhooks$_$_$messages$original,
  $webhooks$_$_$slack,
  Autocomplete,
  Button,
  CUSTOM_ID_SEPARATOR,
  Command,
  Components,
  Content,
  DiscordHono,
  Embed,
  Layout,
  Modal,
  Option,
  Poll,
  Select,
  SubCommand,
  SubGroup,
  TextInput,
  _applications_$_activityinstances_$,
  _applications_$_commands,
  _applications_$_commands_$,
  _applications_$_emojis,
  _applications_$_emojis_$,
  _applications_$_entitlements,
  _applications_$_entitlements_$,
  _applications_$_entitlements_$_consume,
  _applications_$_guilds_$_commands,
  _applications_$_guilds_$_commands_$,
  _applications_$_guilds_$_commands_$_permissions,
  _applications_$_guilds_$_commands_permissions,
  _applications_$_roleconnections_metadata,
  _applications_$_skus,
  _applications_me,
  _channels_$,
  _channels_$_followers,
  _channels_$_invites,
  _channels_$_messages,
  _channels_$_messages_$,
  _channels_$_messages_$_crosspost,
  _channels_$_messages_$_reactions,
  _channels_$_messages_$_reactions_$,
  _channels_$_messages_$_reactions_$_$,
  _channels_$_messages_$_reactions_$_me,
  _channels_$_messages_$_threads,
  _channels_$_messages_bulkdelete,
  _channels_$_permissions_$,
  _channels_$_pins,
  _channels_$_pins_$,
  _channels_$_polls_$_answers_$,
  _channels_$_polls_$_expire,
  _channels_$_recipients_$,
  _channels_$_sendsoundboardsound,
  _channels_$_threadmembers,
  _channels_$_threadmembers_$,
  _channels_$_threadmembers_me,
  _channels_$_threads,
  _channels_$_threads_archived_private,
  _channels_$_threads_archived_public,
  _channels_$_typing,
  _channels_$_users_me_threads_archived_private,
  _channels_$_webhooks,
  _guilds,
  _guilds_$,
  _guilds_$_auditlogs,
  _guilds_$_automoderation_rules,
  _guilds_$_automoderation_rules_$,
  _guilds_$_bans,
  _guilds_$_bans_$,
  _guilds_$_bulkban,
  _guilds_$_channels,
  _guilds_$_emojis,
  _guilds_$_emojis_$,
  _guilds_$_incidentactions,
  _guilds_$_integrations,
  _guilds_$_integrations_$,
  _guilds_$_invites,
  _guilds_$_members,
  _guilds_$_members_$,
  _guilds_$_members_$_roles_$,
  _guilds_$_members_me,
  _guilds_$_members_me_nick,
  _guilds_$_members_search,
  _guilds_$_mfa,
  _guilds_$_onboarding,
  _guilds_$_preview,
  _guilds_$_prune,
  _guilds_$_regions,
  _guilds_$_roles,
  _guilds_$_roles_$,
  _guilds_$_scheduledevents,
  _guilds_$_scheduledevents_$,
  _guilds_$_scheduledevents_$_users,
  _guilds_$_soundboardsounds,
  _guilds_$_soundboardsounds_$,
  _guilds_$_stickers,
  _guilds_$_stickers_$,
  _guilds_$_templates,
  _guilds_$_templates_$,
  _guilds_$_threads_active,
  _guilds_$_vanityurl,
  _guilds_$_voicestates_$,
  _guilds_$_voicestates_me,
  _guilds_$_webhooks,
  _guilds_$_welcomescreen,
  _guilds_$_widget,
  _guilds_$_widgetjson,
  _guilds_$_widgetpng,
  _guilds_templates_$,
  _interactions_$_$_callback,
  _invites_$,
  _skus_$_subscriptions,
  _skus_$_subscriptions_$,
  _soundboarddefaultsounds,
  _stageinstances,
  _stageinstances_$,
  _stickerpacks,
  _stickerpacks_$,
  _stickers_$,
  _users_$,
  _users_me,
  _users_me_applications_$_roleconnection,
  _users_me_channels,
  _users_me_connections,
  _users_me_guilds,
  _users_me_guilds_$,
  _users_me_guilds_$_member,
  _voice_regions,
  _webhooks_$,
  _webhooks_$_$,
  _webhooks_$_$_github,
  _webhooks_$_$_messages_$,
  _webhooks_$_$_messages_original,
  _webhooks_$_$_slack,
  createFactory,
  createRest,
  messageFlags,
  register,
  retry429,
  testCommandRequestBodyJson,
  testCommandRequestInit,
  testVerifyTrue,
  webhook
};

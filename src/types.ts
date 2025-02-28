export enum Kind {
	Metadata = 0,
	Text = 1,
	RecommendRelay = 2,
	Contacts = 3,
	Repost = 6,
	Reaction = 7,
	ZapReceipt = 9735,
	AppRecommendation = 31989,
	AppHandler = 31990,
}

export interface Meta {
	content: string;
	images: string[];
	events: string[];
	mentions: string[];
	hashtags: string[];
}

export interface NostrEvent {
	id: string;
	pubkey: string;
	created_at: number;
	kind: Kind;
	tags: string[][];
	content: string;
	sig: string;
	meta: Meta | null;
}

export interface EventWithReplies extends NostrEvent {
	replies: Array<NostrEvent>;
}

export interface EventTag {
	id: string;
	relayHint: string;
}

export interface Metadata {
	name?: string;
	display_name?: string;
	about?: string;
	website?: string;
	picture?: string;
	banner?: string;
	nip05?: string;
	lud06?: string;
	lud16?: string;
}

export interface LumeColumn {
	label: string;
	name: string;
	url: string;
	description?: string;
	default?: boolean;
	account?: string;
}

export interface ColumnEvent {
	type: "reset" | "add" | "remove" | "update" | "move" | "set_title";
	column: LumeColumn;
	label: string;
	title: string;
	direction: "left" | "right";
}

export interface Relays {
	connected: string[];
	read: string[];
	write: string[];
	both: string[];
}

export interface Relay {
	url: string;
	purpose: "read" | "write" | string;
}

export interface EventPayload {
	raw: string;
	parsed: Meta;
}


export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const DEMO_SCHEMA = {
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "AddressLine1": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "AddressLine2": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "Country": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "address_code": {
		"@class": "Codes",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Codes": {
	  "@key": {
		"@fields": [
		  "postal"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "postal": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Color": {
	  "@type": "Enum",
	  "@values": [
		"red",
		"blue",
		"green"
	  ]
	},
	"terminusdb:///schema#Job": {
	  "@key": {
		"@fields": [
		  "title"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "title": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Person": {
	  "@key": {
		"@fields": [
		  "name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "lives_in": {
		"@class": "Address",
		"@subdocument": []
	  },
	  "name": "xsd:string"
	}
}

export const DEMO_DOCUMENT_TYPE="Person"

export const DEMO_FORM_DATA={
	"@id":"Person/Kitty%20Jose",
	"@type":"Person",
	"age":34,
	"likes":"red",
	"lives_in":[
	   {
		  "@id":"Person/Kitty%20Jose/lives_in/Address/b513cba9caad048a385e8e784ca43a3bf68ed8a4f7dd6c9e4be7aa284598b259",
		  "@type":"Address",
		  "AddressLine1":"5 beverly leinster square ",
		  "AddressLine2":"rathmines dublin 6",
		  "Country":"Ireland",
		  "address_code":"Codes/001"
	   }
	],
	"name":"Kitty Jose",
	"nicknames":[
	   "KITZ",
	   "KITZKAN"
	],
	"works_as":"Job/Party%20Group"
 }

export const DEMO_DOCUMENTS = {
	"Job": [
		"Job/CEO",
		"Job/CTO",
		"Job/OPS",
		"Job/Party%20Group"],
	"Codes": [
		"Codes/001",
		"Codes/002",
		"Codes/003",
		"Codes/004",
		"Codes/005"]
}

export const DEMO_SCHEMA_UI = {
  "placeholder": "xsd:dateTime"
}


export const PROFILE_SCHEMA = {
	"terminusdb:///schema#APIKey": {
	  "@documentation": {
		"@comment": "the user api  key to connect with the Cloud Server"
	  },
	  "@key": {
		"@fields": [
		  "api_token"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "api_description": "xsd:string",
	  "api_token": "xsd:string",
	  "key_valid_from": "xsd:dateTime",
	  "key_valid_to": "xsd:dateTime",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Entity": {
	  "@abstract": [],
	  "@type": "Class",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Invitation": {
	  "@key": {
		"@fields": [
		  "invited_by",
		  "email_to",
		  "creation_date"
		],
		"@type": "Hash"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "creation_date": "xsd:dateTime",
	  "email_to": "xsd:string",
	  "invited_by": "User",
	  "note": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "role": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  }
	},
	"terminusdb:///schema#Organization": {
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Personal": {
	  "@documentation": {
		"@comment": "Personal hello hello"
	  },
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Status": {
	  "@type": "Enum",
	  "@values": [
		"pending",
		"inactive",
		"active",
		"needs_invite",
		"invite_sent",
		"accepted",
		"rejected"
	  ]
	},
	"terminusdb:///schema#StripeSubscription": {
	  "@documentation": {
		"@comment": "Personal hello hello",
		"@properties": {
		  "stripe_id": "hello stripe"
		}
	  },
	  "@key": {
		"@fields": [
		  "stripe_id"
		],
		"@type": "Lexical"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "billing_email": "xsd:string",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_id": "xsd:string",
	  "stripe_quantity": "xsd:decimal",
	  "stripe_user": "User",
	  "subscription_id": "xsd:string"
	},
	"terminusdb:///schema#Team": {
	  "@key": {
		"@fields": [
		  "organization_name"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "child": {
		"@class": "Organization",
		"@type": "Set"
	  },
	  "collaborators": {
		"@class": "User",
		"@type": "Set"
	  },
	  "creation_date": "xsd:dateTime",
	  "expiration_data": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "invitations": {
		"@class": {
		  "@class": "Invitation",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "organization_name": "xsd:string",
	  "owned_by": "User",
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "stripe_subscription": {
		"@class": {
		  "@class": "StripeSubscription",
		  "@subdocument": []
		},
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#User": {
	  "@key": {
		"@fields": [
		  "user_id"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "api_key": {
		"@class": {
		  "@class": "APIKey",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
	  "company": "xsd:string",
	  "email": "xsd:string",
	  "first_name": "xsd:string",
	  "last_name": "xsd:string",
	  "picture": "xsd:string",
	  "registration_date": {
		"@class": "xsd:dateTime",
		"@type": "Optional"
	  },
	  "status": {
		"@id": "Status",
		"@type": "Enum",
		"@values": [
		  "pending",
		  "inactive",
		  "active",
		  "needs_invite",
		  "invite_sent",
		  "accepted",
		  "rejected"
		]
	  },
	  "user_id": "xsd:string"
	}
}


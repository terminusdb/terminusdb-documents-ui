
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const DEMO_SCHEMA ={
	"terminusdb:///schema#Groups": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "groups_at": {
		"@class": "Job",
		"@type": "Optional"
	  },
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	},
	"terminusdb:///schema#Hobbies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "likes_group": {
		"@class": "Groups",
		"@subdocument": []
	  },
	  "optional": {
		"@class": "Job",
		"@type": "Optional"
	  },
	  "works_as": {
		"@class": "Job",
		"@type": "Set"
	  }
	},
	"terminusdb:///schema#Job": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "title": "xsd:string"
	}
  }

export const DEMO_DOCUMENT_TYPE="Hobbies"

export const DEMO_FORM_DATA= {
	"@id": "Hobbies/be9add69b6c3304078d6990821f69c8699b929b551071dae764ec1e0d6d4ce80",
	"@type": "Hobbies",
	"lives_in": [{
		"@id": "Hobbies/be9add69b6c3304078d6990821f69c8699b929b551071dae764ec1e0d6d4ce80/lives_in/0/Address/45598c024e9ad5d2e2ea519e0c75990b6dc0fde4ff4d60cae5d60ae836235165",
		"@type": "Address",
		"AddressLine1": "Apartment 51 Block 3",
		"AddressLine2": "Dundrum Gate Ballinteer road",
		"Country": "Ireland",
		"address_code": "Codes/002"
	}]
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
	  "stripe_referrer": {
		"@class": "xsd:string",
		"@type": "Optional"
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

export const PROFILE_FORM_DATA = {
	"@id":"Organization/MENO",
	"@type":"Organization",
	"collaborators":[
	   "User/BLUEME"
	],
	"creation_date":"2011-01-01T01:00:37Z",
	"organization_name":"MENO",
	"owned_by":"User/WHO",
	"status":"active"
 }

 export const PROFILE_FORM_DATA_USER= {
	"@id":"User/BLUEME",
	"@type":"User",
	"company":"PRETO",
	"email":"kitty@terminusdb.com",
	"first_name":"Kitty",
	"last_name":"Jose",
	"picture":"WHO",
	"status":"inactive",
	"user_id":"BLUEME"
 }

export const PROFILE_DEMO_DOCUMENTS = {
	"User": [
		"User/WHO",
		"User/MOO"],
	"Organization": [
		"Organization/001",
		"Organization/002",
		"Organization/003",
		"Organization/004"]
}


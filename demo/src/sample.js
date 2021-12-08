
export const CREATE="Create"
export const EDIT="Edit"
export const VIEW="View"


export const DEMO_SCHEMA ={
	"terminusdb:///schema#Address": {
	  "@key": {
		"@type": "Random"
	  },
	  "@subdocument": [],
	  "@type": "Class",
	  "AddressLine1": "xsd:string",
	  "AddressLine2": "xsd:string",
	  "Country": "xsd:string",
	  "address_code": "Codes"
	},
	"terminusdb:///schema#Codes": {
	  "@key": {
		"@fields": [
		  "postal"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "located": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Set"
	  },
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
	"terminusdb:///schema#Hobbies": {
	  "@key": {
		"@type": "Random"
	  },
	  "@type": "Class",
	  "likes": {
		"@class": "Job",
		"@type": "Set"
	  }
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
		  "name",
		  "works_as"
		],
		"@type": "Lexical"
	  },
	  "@type": "Class",
	  "likes": {
		"@class": {
		  "@id": "Color",
		  "@type": "Enum",
		  "@values": [
			"red",
			"blue",
			"green"
		  ]
		},
		"@type": "Optional"
	  },
	  "lives_in": {
		"@class": {
		  "@class": "Address",
		  "@subdocument": []
		},
		"@type": "Optional"
	  },
	  "name": "xsd:string",
	  "nicknames": {
		"@class": "xsd:string",
		"@type": "Set"
	  },
	  "works_as": "Job"
	},
	"terminusdb:///schema#valuehash": {
	  "@key": {
		"@type": "ValueHash"
	  },
	  "@type": "Class",
	  "color": {
		"@class": "xsd:string",
		"@type": "Optional"
	  },
	  "name": {
		"@class": "xsd:string",
		"@type": "Optional"
	  }
	}
  }

export const DEMO_DOCUMENT_TYPE="Hobbies"

export const DEMO_FORM_DATA= {
	"@id":"Hobbies/049617c7d39cb16de043febbf29468d0046f1fb60d5659e3cbf673b0a1d4ce43",
	"@type":"Hobbies",
	"likes":[
	   "Job/CTO",
	   "Job/Party%20Group"
	]
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
	"@id":"Organization/MICRO",
	"@type":"Organization",
	"creation_date":"2011-01-01T01:00:37Z",
	"invitations":[
	   {
		  "@id":"Organization/MICRO/invitations/Invitation/299de9d1abcbda9cc08ef08d8f5ab4248ed4adeb7871c238907d641f3c7ea32e",
		  "@type":"Invitation",
		  "creation_date":"2011-01-01T01:00:37Z",
		  "email_to":"kitty@terminusdb.com",
		  "invited_by":"User/BOO",
		  "note":"SADSAD",
		  /*"role":"asdasd",*/
		  "status":"invite_sent"
	   },
	   {
		  "@id":"Organization/MICRO/invitations/Invitation/a671d252faff53b1d86b76b8bdb8c37d9f95fdc303ffcf51d50ad5c7eba246de",
		  "@type":"Invitation",
		  "creation_date":"2011-01-01T01:00:37Z",
		  "email_to":"kitty@gmail.com",
		  "invited_by":"User/WHO",
		  "note":"SSD",
		  "role":"SA",
		  "status":"accepted"
	   }
	],
	"organization_name":"MICRO",
	"owned_by":"User/WHO",
	"status":"accepted",
	"stripe_subscription":{
	   "@id":"Organization/MICRO/stripe_subscription/StripeSubscription/KITTY2011-01-01T01%3A00%3A37Z",
	   "@type":"StripeSubscription",
	   "billing_email":"kitty@terminusdb.com",
	   "status":"needs_invite",
	   "stripe_id":"KITTY2011-01-01T01:00:37Z",
	   "stripe_quantity":2,
	   "stripe_user":"User/WHO",
	   "subscription_id":"DASDSDASD"
	}
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


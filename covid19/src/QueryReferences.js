triple("DependencyRelation/c5d776655085578e84704cf33c92653ee0797cb8cc67b8a8b52b34c303960f54", "v:A", "v:B"),
  and(
  	triple("v:A", "@schema:dependent", "v:Dependent"),
   	triple("v:A", "@schema:depends_on", "v:DependsOn"),
    triple("v:Dependent", "v:Dependent_Properties", "v:Dependent_Properties_Values"),
    triple("v:Dependent_Properties", "@schema:location", "v:Dependent_location")
  )


  triple("DependencyRelation/c5d776655085578e84704cf33c92653ee0797cb8cc67b8a8b52b34c303960f54", "v:A", "v:B"),
  //and(
  	triple("v:A", "@schema:dependent", "v:Dependent"),
   	//triple("v:A", "@schema:depends_on", "v:DependsOn")
   // triple("v:Dependent_Properties", "@schema:location", "v:Dependent_location")
  //),

  	triple("v:Dependent", "v:DependentProperties", "v:DependentPropertiesValues"),
    //triple("v:DependentProperties", "@schema:geo_location", "v:DependentLocation")



    triple("DependencyRelation/c5d776655085578e84704cf33c92653ee0797cb8cc67b8a8b52b34c303960f54", "v:A", "v:B"),
  	triple("v:A", "@schema:dependent", "v:Dependent"),
  	triple("v:Dependent", "v:DependentProperties", "v:DependentPropertiesValues"),




      //dependancy
      triple("DependencyRelation/c5d776655085578e84704cf33c92653ee0797cb8cc67b8a8b52b34c303960f54", "v:A", "v:B")




      //working asset dependent on

      triple("v:Rel", "@schema:dependent", "Asset/48f9bf8681422fc84ea418b795a7433328852ab396ce7801d1f9d182085563a7")
      .triple("v:Rel", "@schema:depends_on", "v:DependantOn")
      .triple("v:DependantOn", "@schema:location", "v:Loc")
      .triple("v:Loc", "@schema:geo_location", "v:GeoLoc")
      .triple("v:GeoLoc", "@schema:latitude", "v:Latitude")
      .triple("v:GeoLoc", "@schema:longitude", "v:Longitude")

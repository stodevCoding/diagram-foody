var entities = [{
  "id": 1,
  "typeString": "class",
  "properties": [
    {
  "name": "var base_url_ingredient",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "var base_url_recipe",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "name": "NetworkConst"
},{
  "id": 2,
  "typeString": "class",
  "properties": [
    {
  "name": "var myFirstGroup: DispatchGroup",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var mySecondGroup: DispatchGroup",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var recipe_list: [RecipesModel]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var recipe_selected: singleRecipe?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "getRecipes(ingredients: [String])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getRecipe(recipe: RecipesModel)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "NetworkManager"
},{
  "id": 3,
  "typeString": "class",
  "properties": [
    {
  "name": "let audioEngine",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let speechRecognizer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let request",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var recognitionTask: SFSpeechRecognitionTask?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SpeechReco",
  "superClass": 34
},{
  "id": 4,
  "typeString": "class",
  "methods": [
    {
  "name": "cleanArray(input: [String]) -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "singularWordsInArray(input: [String]) -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "singularWordsInArrayImproved(input: [String], data:[String]) -> [String]",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "filterContentForSearchText(searchText: String, data: [String]) -> Bool",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "getSingularWord(letter: Character, word: String) -> String",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "toto"
},{
  "id": 5,
  "typeString": "class",
  "properties": [
    {
  "name": "var name: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var difficulty: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var ingredients: [String]?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var steps: [String]?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var ppl_quantity: Int?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var total_time: String?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: singleRecipe, rhs: singleRecipe) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(name: String, difficulty: String, ingredients: [String], steps: [String], ppl_quantity: Int, total_time: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "singleRecipe",
  "superClass": 35
},{
  "id": 6,
  "typeString": "class",
  "properties": [
    {
  "name": "var name: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var description: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var rate: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var url: String?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "== (lhs: RecipesModel, rhs: RecipesModel) -> Bool",
  "type": "type",
  "accessLevel": "public"
},
    {
  "name": "hash(into hasher: inout Hasher)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init(name: String, description: String, rate: String, url: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RecipesModel",
  "superClass": 35
},{
  "id": 7,
  "typeString": "class",
  "properties": [
    {
  "name": "var ingredients_list",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "methods": [
    {
  "name": "filterContentForSearchText(_ searchText: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "singularWordsFromString(input: String) -> String",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getSingularWord(letter: Character, word: String) -> String",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "name": "ingredients"
},{
  "id": 8,
  "typeString": "class",
  "properties": [
    {
  "name": "var name: String?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "RecipeModel"
},{
  "id": 9,
  "typeString": "class",
  "properties": [
    {
  "name": "var isLoggedIn: Bool? @Published",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFamilyName: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userEmail: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userImage: URL?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "BoolhasImageProfile () -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "isUserConnected()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "logOut()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "FirebaseSession",
  "superClass": 36
},{
  "id": 10,
  "typeString": "class",
  "properties": [
    {
  "name": "var sessionUser: User? @Published",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isLoggedIn: Bool?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, open url: URL, sourceApplication: String?, annotation: Any) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sign(_ signIn: GIDSignIn!, didSignInFor user: GIDGoogleUser!, withError error: Error!)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sign(_ signIn: GIDSignIn!, didDisconnectWith user: GIDGoogleUser!, withError error: Error!)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    38,
    39
  ],
  "name": "AppDelegate",
  "superClass": 36
},{
  "id": 11,
  "typeString": "struct",
  "properties": [
    {
  "name": "var tabs",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var txt",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedTab",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedData : [[String]]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var entree",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var veggie",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var desserts",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var plats",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body : some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Home",
  "superClass": 40
},{
  "id": 12,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Home_Previews",
  "superClass": 41
},{
  "id": 13,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TabNavigation",
  "superClass": 40
},{
  "id": 14,
  "typeString": "enum",
  "properties": [
    {
  "name": "var scale: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "inactive case pressing var scale"
}
  ],
  "name": "SequenceState"
},{
  "id": 15,
  "typeString": "struct",
  "properties": [
    {
  "name": "var speech : speechRecognisation @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter: ViewRouter @GestureState",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sequenceState",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let longPressGesture",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SequenceMicroButton",
  "superClass": 40,
  "containedEntities": [
    14
  ]
},{
  "id": 16,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MicroImageView",
  "superClass": 40
},{
  "id": 17,
  "typeString": "struct",
  "properties": [
    {
  "name": "var selected: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter: ViewRouter @GestureState",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tap",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isPressed",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TabBarBottom",
  "superClass": 40
},{
  "id": 18,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body : some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "CurvedShape",
  "superClass": 40
},{
  "id": 19,
  "typeString": "struct",
  "properties": [
    {
  "name": "var selected",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter: ViewRouter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body : some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BottomBar",
  "superClass": 40
},{
  "id": 20,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "TabNavigation_Previews",
  "superClass": 41
},{
  "id": 21,
  "typeString": "class",
  "properties": [
    {
  "name": "var currentView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ViewRouter",
  "superClass": 36
},{
  "id": 22,
  "typeString": "struct",
  "properties": [
    {
  "name": "var userFS : FirebaseSession @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var sessionUser: AppDelegate @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter: ViewRouter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView",
  "superClass": 40
},{
  "id": 23,
  "typeString": "struct",
  "properties": [
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ConnectByGoogle",
  "superClass": 40
},{
  "id": 24,
  "typeString": "struct",
  "properties": [
    {
  "name": "var userFS : FirebaseSession",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Profil",
  "superClass": 40
},{
  "id": 25,
  "typeString": "struct",
  "properties": [
    {
  "name": "var image",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var name",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var color: Color",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "btnSettings",
  "superClass": 40
},{
  "id": 26,
  "typeString": "struct",
  "methods": [
    {
  "name": "makeUIView(context: UIViewRepresentableContext<SocialLogin>) -> UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateUIView(_ uiView: UIView, context: UIViewRepresentableContext<SocialLogin>)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "attemptLoginGoogle()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SocialLogin",
  "superClass": 42
},{
  "id": 27,
  "typeString": "struct",
  "properties": [
    {
  "name": "var speech : speechRecognisation @State",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isActive",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SpeechView",
  "superClass": 40
},{
  "id": 28,
  "typeString": "struct",
  "properties": [
    {
  "name": "var recipies: recipeService @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var speech: speechRecognisation @State",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isActive",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectedRecipe",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RecipesView",
  "superClass": 40
},{
  "id": 29,
  "typeString": "struct",
  "properties": [
    {
  "name": "let recipe: RecipesModel @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var recipies: recipeService @EnvironmentObject",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter: ViewRouter",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: some View",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RecipeView",
  "superClass": 40
},{
  "id": 30,
  "typeString": "struct",
  "properties": [
    {
  "name": "var previews: some View",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "ContentView_Previews",
  "superClass": 41
},{
  "id": 31,
  "typeString": "class",
  "properties": [
    {
  "name": "var micEnabled: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var caption: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var navIsActive",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ingredient_todisplay: [String]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var audioEngine",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ingr",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ingredients_said :Set",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let speechRecognizer",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let request",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var recognitionTask: SFSpeechRecognitionTask?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "recordAndRecognizeSpeech()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "launchRequest()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "stopRecording()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "microTapped()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "speechRecognisation",
  "superClass": 36
},{
  "id": 32,
  "typeString": "class",
  "properties": [
    {
  "name": "var recipe_list: [RecipesModel]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var recipeSelected: singleRecipe",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var show_recipe",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var show_recipies",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var network",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "getRecipies(parIngr: [String])",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "getRecipe(parRecipe: RecipesModel)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "recipeService",
  "superClass": 36
},{
  "id": 33,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userFS",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var appDelegate",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewRouter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidDisconnect(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidBecomeActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillResignActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillEnterForeground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidEnterBackground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneDelegate",
  "superClass": 37
},{
  "id": 34,
  "typeString": "class",
  "name": "SFSpeechRecognizer"
},{
  "id": 35,
  "typeString": "class",
  "name": "Hashable"
},{
  "id": 36,
  "typeString": "class",
  "name": "ObservableObject"
},{
  "id": 37,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 38,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 39,
  "typeString": "protocol",
  "name": "GIDSignInDelegate"
},{
  "id": 40,
  "typeString": "class",
  "name": "View"
},{
  "id": 41,
  "typeString": "class",
  "name": "PreviewProvider"
},{
  "id": 42,
  "typeString": "class",
  "name": "UIViewRepresentable"
}] 
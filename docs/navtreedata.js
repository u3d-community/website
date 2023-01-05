/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "U3D", "index.html", [
    [ "Documentation", "index.html", null ],
    [ "Building Urho3D library", "_building.html", [
      [ "Building prerequisites", "_building.html#Building_Prerequisites", null ],
      [ "Build scripts", "_building.html#Build_Scripts", null ],
      [ "Build options", "_building.html#Build_Options", null ],
      [ "Native build process", "_building.html#Building_Native", null ],
      [ "Android build process", "_building.html#Building_Android", null ],
      [ "iOS and tvOS build process (tvOS is still EXPERIMENTAL)", "_building.html#Building_iOS_tvOS", null ],
      [ "Raspberry Pi build process", "_building.html#Building_RaspberryPi", null ],
      [ "Generic ARM build process (EXPERIMENTAL)", "_building.html#Building_GenericARM", null ],
      [ "MinGW cross-compile build process", "_building.html#Building_MinGW", null ],
      [ "Emscripten build process", "_building.html#Building_Emscripten", null ],
      [ "Native 64bit build", "_building.html#Building_64bit", null ],
      [ "Library build", "_building.html#Building_Library", null ],
      [ "Documentation build", "_building.html#Building_Docs", null ],
      [ "Clang-tools build (EXPERIMENTAL)", "_building.html#Building_Clang_tools", null ],
      [ "Compiling Direct3D shaders", "_building.html#Building_Shaders", null ],
      [ "Dockerized build environment (EXPERIMENTAL on *nix host only)", "_building.html#Dockerized_Build_Environment", null ]
    ] ],
    [ "Running Urho3D player application", "_running.html", [
      [ "Description", "_running.html#Running_Description", null ],
      [ "Command line options", "_running.html#Running_Commandline", null ]
    ] ],
    [ "Miscellaneous how-to's", "_misc__how_tos.html", [
      [ "Linux and macOS specific - How to use ccache to speed up build", "_misc__how_tos.html#Using_ccache", null ],
      [ "macOS specific - How to view/edit AngelScript within Xcode", "_misc__how_tos.html#Running_Xcode_AngelScript_Info", null ],
      [ "Windows specific - How to grant non-Administrator user to create symbolic links", "_misc__how_tos.html#symlinking_on_windows", null ]
    ] ],
    [ "Examples", "_examples.html", [
      [ "NinjaSnowWar", "_examples.html#Examples_NinjaSnowWar", null ],
      [ "Editor", "_examples.html#Examples_Editor", null ],
      [ "Sample applications", "_examples.html#Examples_Samples", null ]
    ] ],
    [ "Using Urho3D library", "_using_library.html", [
      [ "Project scaffolding", "_using_library.html#Scaffolding", null ],
      [ "Using pkg-config instead of CMake", "_using_library.html#Using_pkg_config", null ],
      [ "Using rake tasks for project scaffolding and building", "_using_library.html#Using_Rake_Tasks", null ]
    ] ],
    [ "Overall structure", "_structure.html", [
      [ "Execution context", "_structure.html#Structure_Context", null ],
      [ "Third-party libraries", "_structure.html#Structure_ThirdParty", null ]
    ] ],
    [ "Conventions", "_conventions.html", "_conventions" ],
    [ "Editor instructions", "_editor_instructions.html", [
      [ "Controls (standard style hotkeys)", "_editor_instructions.html#EditorInstructions_Controls", null ],
      [ "Controls (Blender style hotkeys)", "_editor_instructions.html#EditorInstructions_Controls2", null ],
      [ "Workflow", "_editor_instructions.html#EditorInstructions_Workflow", null ],
      [ "Editing", "_editor_instructions.html#EditorInstructions_Editing", null ],
      [ "Importing", "_editor_instructions.html#EditorInstructions_Importing", null ]
    ] ],
    [ "Container types", "_containers.html", [
      [ "C++11 features", "_containers.html#Containers_cxx11", null ]
    ] ],
    [ "Object types and factories", "_object_types.html", null ],
    [ "Subsystems", "_subsystems.html", null ],
    [ "Events", "_events.html", [
      [ "Sending events through another object", "_events.html#Events_AnotherObject", null ],
      [ "C++11 event binding and sending", "_events.html#Events_cxx11", null ]
    ] ],
    [ "Engine initialization and main loop", "_main_loop.html", [
      [ "Main loop iteration", "_main_loop.html#MainLoop_Frame", null ],
      [ "Main loop and the application activation state", "_main_loop.html#MainLoop_ApplicationState", null ],
      [ "Application framework", "_main_loop.html#MainLoop_ApplicationFramework", null ]
    ] ],
    [ "Scene model", "_scene_model.html", [
      [ "Components", "_scene_model.html#SceneModel_Components", null ],
      [ "Identification and queries", "_scene_model.html#SceneModel_Identification", null ],
      [ "Scene hierarchy", "_scene_model.html#SceneModel_Hierarchy", null ],
      [ "Scene updates", "_scene_model.html#SceneModel_Update", null ],
      [ "Creating logic functionality", "_scene_model.html#SceneModel_Logic", null ],
      [ "Loading and saving scenes", "_scene_model.html#SceneModel_LoadSave", null ],
      [ "Object prefabs", "_scene_model.html#SceneModel_Instantiation", null ],
      [ "Scene graph events", "_scene_model.html#SceneModel_Events", null ],
      [ "Further information", "_scene_model.html#SceneModel_FurtherInformation", null ]
    ] ],
    [ "Resources", "_resources.html", [
      [ "Background loading of resources", "_resources.html#Resources_Background", null ],
      [ "Implementing background loading", "_resources.html#Resources_BackgroundImplementation", null ]
    ] ],
    [ "Localization", "_localization.html", [
      [ "Initialization", "_localization.html#LocalizationInit", null ],
      [ "Using", "_localization.html#LocalizationUsing", null ]
    ] ],
    [ "Scripting", "_scripting.html", [
      [ "Immediate execution", "_scripting.html#Scripting_Immediate", null ],
      [ "Calling a function from a script file", "_scripting.html#Scripting_Procedural", null ],
      [ "Instantiating a script object", "_scripting.html#Scripting_Object", null ],
      [ "Script object serialization", "_scripting.html#Scripting_ObjectSerialization", null ],
      [ "Delayed method calls", "_scripting.html#Script_DelayedCalls", null ],
      [ "The script API", "_scripting.html#Script_ScriptAPI", null ],
      [ "Precompiling scripts to bytecode", "_scripting.html#Script_Bytecode", null ],
      [ "Limitations", "_scripting.html#Scripting_Limitations", null ],
      [ "AngelScript modifications", "_scripting.html#Scripting_Modifications", null ]
    ] ],
    [ "Lua scripting", "_lua_scripting.html", [
      [ "Immediate execution", "_lua_scripting.html#LuaScripting_Immediate", null ],
      [ "Script files and functions", "_lua_scripting.html#LuaScripting_ScriptFiles", [
        [ "Debugging script files", "_lua_scripting.html#LuaScripting_Debugging", null ]
      ] ],
      [ "Script objects", "_lua_scripting.html#LuaScripting_ScriptObjects", null ],
      [ "Event handling", "_lua_scripting.html#LuaScripting_Events", null ],
      [ "The script API", "_lua_scripting.html#LuaScripting_API", null ],
      [ "Object allocation & Lua garbage collection", "_lua_scripting.html#LuaScripting_Allocation", null ]
    ] ],
    [ "Rendering", "_rendering.html", [
      [ "Graphics", "_rendering.html#Rendering_Graphics", null ],
      [ "Renderer", "_rendering.html#Rendering_Renderer", null ],
      [ "Rendering components", "_rendering.html#Rendering_Drawable", null ],
      [ "Optimizations", "_rendering.html#Rendering_Optimizations", null ],
      [ "Reusing view preparation", "_rendering.html#Rendering_ReuseView", null ],
      [ "Handling GPU resource loss", "_rendering.html#Rendering_GPUResourceLoss", null ],
      [ "Defining extra instancing data", "_rendering.html#Rendering_ExtraInstanceData", null ],
      [ "Further details", "_rendering.html#Rendering_Further", null ]
    ] ],
    [ "Rendering modes", "_rendering_modes.html", [
      [ "Forward rendering", "_rendering_modes.html#RenderingModes_Forward", null ],
      [ "Light pre-pass rendering", "_rendering_modes.html#RenderingModes_Prepass", null ],
      [ "Deferred rendering", "_rendering_modes.html#RenderingModes_Deferred", null ],
      [ "Advantages and disadvantages", "_rendering_modes.html#RenderingModes_Comparison", null ]
    ] ],
    [ "Differences between rendering APIs", "_a_p_i_differences.html", null ],
    [ "Vertex buffers", "_vertex_buffers.html", [
      [ "Multiple vertex buffers", "_vertex_buffers.html#VertexBuffers_MultipleBuffers", null ],
      [ "Index buffers", "_vertex_buffers.html#VertexBuffers_IndexBuffers", null ]
    ] ],
    [ "Materials", "_materials.html", [
      [ "Material textures", "_materials.html#Materials_Textures", null ],
      [ "Cube map textures", "_materials.html#Materials_CubeMapTextures", null ],
      [ "3D textures", "_materials.html#Materials_3DTextures", null ],
      [ "2D array textures", "_materials.html#Materials_2DArrayTextures", null ],
      [ "Techniques and passes", "_materials.html#Materials_Techniques", null ],
      [ "Render order caveats", "_materials.html#Materials_RenderOrder", null ]
    ] ],
    [ "Shaders", "_shaders.html", [
      [ "Inbuilt compilation defines", "_shaders.html#Shaders_InbuiltDefines", null ],
      [ "Inbuilt shader uniforms", "_shaders.html#Shaders_InbuiltUniforms", null ],
      [ "Writing shaders", "_shaders.html#Shaders_Writing", null ],
      [ "API differences", "_shaders.html#Shaders_API", null ],
      [ "Shader precaching", "_shaders.html#Shaders_Precaching", null ]
    ] ],
    [ "Render path", "_render_paths.html", [
      [ "Depth-stencil handling and reading scene depth", "_render_paths.html#RenderPaths_Depth", null ],
      [ "Soft particles rendering", "_render_paths.html#RenderPaths_SoftParticles", null ],
      [ "Forward lighting special considerations", "_render_paths.html#RenderPaths_ForwardLighting", null ],
      [ "Post-processing effects special considerations", "_render_paths.html#RenderPaths_PostProcess", null ],
      [ "Multisampled rendertargets", "_render_paths.html#RenderPaths_MultiSample", null ]
    ] ],
    [ "Lights and shadows", "_lights.html", [
      [ "Light color", "_lights.html#Lights_LightColor", null ],
      [ "Light culling", "_lights.html#Lights_LightCulling", null ],
      [ "Shadowed lights", "_lights.html#Lights_ShadowedLights", null ],
      [ "Global shadow settings", "_lights.html#Lights_ShadowGlobal", null ],
      [ "Shadow map reuse", "_lights.html#Lights_ShadowMapReuse", null ],
      [ "Shadow culling", "_lights.html#Lights_ShadowCulling", null ]
    ] ],
    [ "Skeletal animation", "_skeletal_animation.html", [
      [ "Animation blending", "_skeletal_animation.html#SkeletalAnimation_Blending", null ],
      [ "Animation triggers", "_skeletal_animation.html#SkeletalAnimation_Triggers", null ],
      [ "Manual bone control", "_skeletal_animation.html#SkeletalAnimation_ManualControl", null ],
      [ "Combined skinned models", "_skeletal_animation.html#SkeletalAnimation_CombinedModels", null ],
      [ "Node animations", "_skeletal_animation.html#SkeletalAnimation_NodeAnimation", null ]
    ] ],
    [ "Particle systems", "_particles.html", null ],
    [ "Zones", "_zones.html", null ],
    [ "Auxiliary views", "_auxiliary_views.html", null ],
    [ "Input", "_input.html", [
      [ "Keyboard and mouse input", "_input.html#InputKeyboard", null ],
      [ "Mouse modes", "_input.html#InputMouseModes", null ],
      [ "Joystick input", "_input.html#InputJoystick", null ],
      [ "Touch input", "_input.html#InputTouch", null ],
      [ "Platform-specific details", "_input.html#InputPlatformSpecific", null ]
    ] ],
    [ "Audio", "_audio.html", [
      [ "Sound parameters", "_audio.html#Audio_Parameters", null ],
      [ "Sound streaming", "_audio.html#Audio_Stream", null ],
      [ "Audio events", "_audio.html#Audio_Events", null ]
    ] ],
    [ "Physics", "_physics.html", [
      [ "Movement and collision", "_physics.html#Physics_Movement", null ],
      [ "Constraint parameters", "_physics.html#Physics_ConstraintParameters", null ],
      [ "Physics events", "_physics.html#Physics_Events", null ],
      [ "Reading collision events", "_physics.html#Physics_Collision", null ],
      [ "Physics queries", "_physics.html#Physics_Queries", null ]
    ] ],
    [ "Navigation", "_navigation.html", [
      [ "Pathfinding weights", "_navigation.html#PathfindingWeights", null ],
      [ "Dynamic Navigation Mesh", "_navigation.html#DynamicNavMesh", null ],
      [ "Crowd navigation", "_navigation.html#CrowdNavigation", null ]
    ] ],
    [ "Inverse Kinematics", "_i_k.html", [
      [ "Overview", "_i_k.html#ikoverview", null ],
      [ "Terminology", "_i_k.html#ikterminology", null ],
      [ "End Effectors", "_i_k.html#ikendeffectors", null ],
      [ "Solvers", "_i_k.html#iksolvers", null ],
      [ "Solver Features", "_i_k.html#iksolverfeatures", [
        [ "AUTO_SOLVE", "_i_k.html#iksolverautosolve", null ],
        [ "IKSolver::JOINT_ROTATIONS", "_i_k.html#iksolverjointrotations", null ],
        [ "TARGET_ROTATIONS", "_i_k.html#iksolvertargetrotations", null ],
        [ "UPDATE_ORIGINAL_POSE, UPDATE_ACTIVE_POSE, and USE_ORIGINAL_POSE", "_i_k.html#iksolvertrees", null ],
        [ "CONSTRAINTS", "_i_k.html#iksolverconstraints", null ]
      ] ]
    ] ],
    [ "User interface", "_u_i.html", [
      [ "UI textures", "_u_i.html#UI_Textures", null ],
      [ "UI layout and style definition files", "_u_i.html#UI_Definition", null ],
      [ "Defining UI layouts programmatically", "_u_i.html#UI_Programmatic", null ],
      [ "Child element layouting", "_u_i.html#UI_Layouts", null ],
      [ "Child element anchoring", "_u_i.html#UI_Anchoring", null ],
      [ "Fonts", "_u_i.html#UI_Fonts", null ],
      [ "Sprites", "_u_i.html#UI_Sprites", null ],
      [ "Cursor Shapes", "_u_i.html#UI_Cursor_Shapes", null ],
      [ "Scaling", "_u_i.html#UI_Scaling", null ]
    ] ],
    [ "Urho2D and Physics2D", "_urho2_d_and__physics2_d.html", [
      [ "Orthographic camera", "_urho2_d_and__physics2_d.html#Urho2D_Orthographic", null ],
      [ "Sprites", "_urho2_d_and__physics2_d.html#Urho2D_Sprites", null ],
      [ "Animated sprites", "_urho2_d_and__physics2_d.html#Urho2D_Animated", null ],
      [ "Particle emitters", "_urho2_d_and__physics2_d.html#Urho2D_Particle", null ],
      [ "Static sprites", "_urho2_d_and__physics2_d.html#Urho2D_Static_Sprites", null ],
      [ "Background and layers", "_urho2_d_and__physics2_d.html#Urho2D_Background_and_Layers", null ],
      [ "Physics2D", "_urho2_d_and__physics2_d.html#Physics2D", null ],
      [ "Rigid bodies components", "_urho2_d_and__physics2_d.html#Physics2D_Rigidbodies_Components", null ],
      [ "Collision shapes components", "_urho2_d_and__physics2_d.html#Physics2D_Collision_Shapes_Components", [
        [ "Shapes", "_urho2_d_and__physics2_d.html#Physics2D_Collision_Shapes_Shapes", null ],
        [ "Fixtures", "_urho2_d_and__physics2_d.html#Physics2D_Collision_Shapes_Fixtures", null ],
        [ "Collision filtering", "_urho2_d_and__physics2_d.html#Physics2D_Collision_Shapes_Filtering", null ],
        [ "Sensors", "_urho2_d_and__physics2_d.html#Physics2D_Collision_Shapes_Sensors", null ]
      ] ],
      [ "Constraints components", "_urho2_d_and__physics2_d.html#Physics2D_Constraints_Components", null ],
      [ "Physics queries", "_urho2_d_and__physics2_d.html#Physics2D_Queries", [
        [ "Unary geometric queries (queries on a single shape)", "_urho2_d_and__physics2_d.html#Physics2D_Queries_Unary", null ],
        [ "Binary functions", "_urho2_d_and__physics2_d.html#Physics2D_Queries_Binary", null ],
        [ "World queries (see Box2D manual - Chapter 10 World Class)", "_urho2_d_and__physics2_d.html#Physics2D_Queries_World", null ]
      ] ],
      [ "Physics events", "_urho2_d_and__physics2_d.html#Physics2D_Events", null ],
      [ "Tile maps", "_urho2_d_and__physics2_d.html#Urho2D_TileMap", [
        [ "\"Loading\" a TMX tile map file", "_urho2_d_and__physics2_d.html#Urho2D_LoadingTMX", null ],
        [ "TMX tile maps", "_urho2_d_and__physics2_d.html#Urho2D_TMX_maps", null ],
        [ "TMX tile map tilesets and tiles", "_urho2_d_and__physics2_d.html#Urho2D_TMX_Tileset", null ],
        [ "TMX tile map layers", "_urho2_d_and__physics2_d.html#Urho2D_TMX_layers", null ],
        [ "TMX tile map objects", "_urho2_d_and__physics2_d.html#Urho2D_TMX_Objects", null ]
      ] ]
    ] ],
    [ "Serialization", "_serialization.html", null ],
    [ "Networking", "_network.html", [
      [ "Connecting to a server", "_network.html#Network_Connecting", null ],
      [ "NAT punchtrough", "_network.html#Network_NAT_Punchtrough", null ],
      [ "Lan Discovery", "_network.html#Network_Lan_Discovery", null ],
      [ "Scene replication", "_network.html#Network_Replication", null ],
      [ "Interest management", "_network.html#Network_InterestManagement", null ],
      [ "Client controls update", "_network.html#Network_Controls", null ],
      [ "Client-side prediction", "_network.html#Network_ClientPrediction", null ],
      [ "Raw network messages", "_network.html#Network_Messages", null ],
      [ "Remote events", "_network.html#Network_RemoteEvents", null ],
      [ "HTTP requests", "_network.html#Network_HttpRequests", null ],
      [ "Network conditions simulation", "_network.html#Network_Simulation", null ]
    ] ],
    [ "Database", "_database.html", [
      [ "Establishing database connection", "_database.html#Establish_DbConnection", [
        [ "ODBC connection string", "_database.html#ODBC_ConnString", [
          [ "DSN connection string", "_database.html#DSN_ConnString", null ],
          [ "DSN-less connection string", "_database.html#DSN_less_ConnString", null ]
        ] ],
        [ "SQLite connection string", "_database.html#SQLite_ConnString", [
          [ "Path connection string", "_database.html#Path_ConnString", null ],
          [ "URI connection string", "_database.html#URI_ConnString", null ]
        ] ]
      ] ],
      [ "Immediate SQL statement execution", "_database.html#Immediate_Execution", null ],
      [ "SQL execution using prepared statements and dynamic parameter bindings", "_database.html#Prepare_Bind_Execution", null ],
      [ "Transaction Management", "_database.html#Transaction_Management", null ],
      [ "Database cursor event", "_database.html#DB_Cursor", null ]
    ] ],
    [ "Multithreading", "_multithreading.html", null ],
    [ "Attribute animation", "_attribute_animation.html", [
      [ "Attribute animation classes", "_attribute_animation.html#AttributeAnimation_Classes", null ]
    ] ],
    [ "Spline path", "_spline_path.html", [
      [ "The SplinePath component", "_spline_path.html#SplinePath_Intro", [
        [ "Building the path", "_spline_path.html#SplinePath_BuildPath", null ],
        [ "Removing points from the path", "_spline_path.html#SplinePath_RemovePoints", null ],
        [ "Assigning the controlled node", "_spline_path.html#SplinePath_ControlNode", null ],
        [ "Moving the controlled node along the path", "_spline_path.html#SplinePath_Moving", null ],
        [ "Behavior controls", "_spline_path.html#SplinePath_BehaviorSettings", null ],
        [ "Taking manual control of the controlled node", "_spline_path.html#SplinePath_ManualControl", null ],
        [ "Querying spline path informations", "_spline_path.html#SplinePath_Queries", null ],
        [ "Debugging", "_spline_path.html#SplinePath_Debug", null ],
        [ "Sample code", "_spline_path.html#SplinePath_SampleCode", null ]
      ] ]
    ] ],
    [ "Tools", "_tools.html", [
      [ "AssetImporter", "_tools.html#Tools_AssetImporter", null ],
      [ "OgreImporter", "_tools.html#Tools_OgreImporter", null ],
      [ "PackageTool", "_tools.html#Tools_PackageTool", null ],
      [ "RampGenerator", "_tools.html#Tools_RampGenerator", null ],
      [ "SpritePacker", "_tools.html#Tools_SpritePacker", null ],
      [ "ScriptCompiler", "_tools.html#Tools_ScriptCompiler", null ]
    ] ],
    [ "Unicode support", "_unicode.html", null ],
    [ "Custom file formats", "_file_formats.html", [
      [ "binary model format (.mdl)", "_file_formats.html#FileFormats_Model", null ],
      [ "binary animation format (.ani)", "_file_formats.html#FileFormats_Animation", null ],
      [ "Direct3D9 binary shader format (.vs3, .ps3)", "_file_formats.html#FileFormats_Shader", null ],
      [ "Direct3D11 binary shader format (.vs4, .ps4)", "_file_formats.html#FileFormats_Shader4", null ],
      [ "Package file (.pak)", "_file_formats.html#FileFormats_Package", null ],
      [ "Compiled AngelScript (.asc)", "_file_formats.html#FileFormats_Script", null ]
    ] ],
    [ "Contribution checklist", "_contribution_checklist.html", [
      [ "Third party library considerations", "_contribution_checklist.html#ContributionThirdParty", null ]
    ] ],
    [ "Credits", "_credits.html", null ],
    [ "License", "_license.html", null ],
    [ "History", "_history.html", null ],
    [ "External links", "_external_links.html", null ],
    [ "Porting notes", "_porting_notes.html", null ],
    [ "Lua scripting API", "_lua_script_a_p_i.html", [
      [ "Table of contents", "_lua_script_a_p_i.html#LuaScriptAPI_TableOfContents", null ],
      [ "Class list", "_lua_script_a_p_i.html#LuaScriptAPI_ClassList", null ],
      [ "Classes", "_lua_script_a_p_i.html#LuaScriptAPI_Classes", null ],
      [ "Enumerations", "_lua_script_a_p_i.html#LuaScriptAPI_Enums", null ],
      [ "tolua functions", "_lua_script_a_p_i.html#LuaScriptAPI_toluaFunctions", null ],
      [ "Global functions", "_lua_script_a_p_i.html#LuaScriptAPI_GlobalFunctions", null ],
      [ "Global properties", "_lua_script_a_p_i.html#LuaScriptAPI_GlobalProperties", null ],
      [ "Global constants", "_lua_script_a_p_i.html#LuaScriptAPI_GlobalConstants", null ]
    ] ],
    [ "Event list", "_event_list.html", null ],
    [ "Attribute list", "_attribute_list.html", null ],
    [ "Scripting API", "_script_a_p_i.html", [
      [ "Table of contents", "_script_a_p_i.html#ScriptAPI_TableOfContents", null ],
      [ "Class list", "_script_a_p_i.html#ScriptAPI_ClassList", null ],
      [ "Classes", "_script_a_p_i.html#ScriptAPI_Classes", null ],
      [ "Enumerations", "_script_a_p_i.html#ScriptAPI_Enums", null ],
      [ "Global functions", "_script_a_p_i.html#ScriptAPI_GlobalFunctions", null ],
      [ "Global properties", "_script_a_p_i.html#ScriptAPI_GlobalProperties", null ],
      [ "Global constants", "_script_a_p_i.html#ScriptAPI_GlobalConstants", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", null ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_p_i_differences.html",
"_graphics_defs_8h.html#a53e6d28bc747bfdb8eb20c83ec887e5caf6d5970708ab09177ae0a206dcda1a21",
"_math_defs_8h.html#a0a246d98041285ef1f63d75fc65567ce",
"_rendering.html#Rendering_Renderer",
"_urho2_d_and__physics2_d.html#Urho2D_Orthographic",
"class_urho3_d_1_1_animated_sprite2_d.html#a7b24eab93fcaf560ef4ad9324f9495be",
"class_urho3_d_1_1_audio.html#acdba78239fb22e22c2944fcbcb6cb5ad",
"class_urho3_d_1_1_camera.html#a33a600e0f12f5a728a9b8bb5535a1906",
"class_urho3_d_1_1_collision_shape2_d.html#a52963467210c78bca21f7463f361c147",
"class_urho3_d_1_1_console.html#a1326b059443a666f16fbe89cb000c662",
"class_urho3_d_1_1_constraint_prismatic2_d.html#a6fd1938284a817617a6ca5a4cc4c8ac4",
"class_urho3_d_1_1_crowd_manager.html#a0e2cff63c07b042ddf4d27116651e9ec",
"class_urho3_d_1_1_debug_renderer.html#a78414acee8d56f4d53a13d9840e1eafb",
"class_urho3_d_1_1_drawable2_d.html#a7059cf55819425c1e97c77e94cdd8fcd",
"class_urho3_d_1_1_file_selector.html#a8ec8d229ef0e2a4836634e01e96803a7",
"class_urho3_d_1_1_geometry.html#a7829b1c45576d075654ddf36d99249a5",
"class_urho3_d_1_1_graphics.html#ab4eae9f7fb45f991a5f2d6de5f1c16e2",
"class_urho3_d_1_1_http_request.html#a5b83ae3fd9b78b1de195bd9cd9103173",
"class_urho3_d_1_1_input.html#a68ae916dd53da436f493f05d150999bb",
"class_urho3_d_1_1_j_s_o_n_value.html#ac3ea500b15c728aea30078a1a5d75b6a",
"class_urho3_d_1_1_list_view.html#a2c7adecbfcfc748d393a79f945d84faf",
"class_urho3_d_1_1_lua_script_instance.html#aaa1819ee98091c32628e30c9bb107041",
"class_urho3_d_1_1_matrix4.html#af4dc0fb720bbe23c3165bbf1f8629a6c",
"class_urho3_d_1_1_navigation_mesh.html#ae3f6edda40ca3106877135ebd588e321",
"class_urho3_d_1_1_node.html#aa0daf520ec369bcfde6b75a60ec89ae2",
"class_urho3_d_1_1_octant.html#a6304500141e75a6b6537a334d3922cec",
"class_urho3_d_1_1_particle_effect.html#a38474a3942bb2b80332026d1360e47f7",
"class_urho3_d_1_1_particle_emitter.html#a8ef53d3dce08703ad0198d9fee954f87",
"class_urho3_d_1_1_physics_world2_d.html#a82f4cdb1305aba660b4f3ffdcc7b4e87",
"class_urho3_d_1_1_ray.html#aea4afa2ac05cfdc0ee537f24406cfad8",
"class_urho3_d_1_1_renderer.html#a2643fed4c08cc81a1fcd6ba637bcfbd1",
"class_urho3_d_1_1_resource_cache.html#a7ea584bf640ad59e61923c234b04e3f8",
"class_urho3_d_1_1_rigid_body2_d.html#a006a8f6909385747ae378636fd8d8225",
"class_urho3_d_1_1_script_file.html#a2f79f30668794f1e04c2f5a1bb9e4896",
"class_urho3_d_1_1_serializer.html",
"class_urho3_d_1_1_slider.html#a33f4eba8c5f96d8c9e0c2bbc63daef88",
"class_urho3_d_1_1_spline.html#aa1e1a1469b2e32c5216961a2c95b5b80",
"class_urho3_d_1_1_static_sprite2_d.html#a3268c4f2ccdb2df5fa461c1716c0b344",
"class_urho3_d_1_1_technique.html#aca01010c78a647ccbfd7dba06915ee6a",
"class_urho3_d_1_1_text.html#ae0ac58c7dfc1c6efdcfe69214b98eeb8",
"class_urho3_d_1_1_texture_cube.html#a6b635689647bfaf37a0be4e0e4e823fe",
"class_urho3_d_1_1_u_i.html#a1b01d7a10ff43c74906548d2af23ed0c",
"class_urho3_d_1_1_u_i_element.html#a42ba569b85efe56042609c385a56a379",
"class_urho3_d_1_1_unknown_component.html#a16ae9f4862f1b59b44a2d436164d7a45",
"class_urho3_d_1_1_variant.html#acb1ee709390d7ac4d8e1abb4784539af",
"class_urho3_d_1_1_vector4.html#aa7ce15bb6c9ec513d01a12a526f04378",
"class_urho3_d_1_1_view3_d.html#ab297fa6628831011334e300ebecab208",
"class_urho3_d_1_1_x_m_l_element.html#a7ae9d6c7a28e118eb4fc9fbf65163a32",
"functions_func_v.html",
"struct_urho3_d_1_1_cascade_parameters.html#a16f5cbad809217cbe07d366c89819aff",
"struct_urho3_d_1_1_hash_set_1_1_node.html#a14e34a022a5d74c64c3248d8d48b8ce0",
"struct_urho3_d_1_1_physics_world2_d_1_1_contact_info.html#abfa37eea722bd227307df5cc6310879a",
"struct_urho3_d_1_1_touch_state.html#a82d339471834da69285faa28468af63a",
"structgw_1_1_wrapper_3_01void_07_t_1_1_5_08_07_a0_00_01_a1_00_01_a2_00_01_a3_00_01_a4_00_01_a5_00_01_a6_00_01_a7_00_01_a8_08_4.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
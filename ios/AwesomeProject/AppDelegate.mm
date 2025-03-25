#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <MMKV/MMKV.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"AwesomeProject";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  [MMKV initializeMMKV:nil];
  MMKV *mmkv = [MMKV defaultMMKV];
  // NSString *storageKey = [NSString stringWithFormat:@"user_input"];
  // NSString *userInput = [mmkv getStringForKey:storageKey];
  // NSLog(@"📦 MMKV Stored Value: %@", userInput ?: @"No data found");


  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end

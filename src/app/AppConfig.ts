import { environment } from '../environments/environment';
import { IMetric } from './interfaces/IMetric';
import { ITimeFilterElement } from './interfaces/ITimeFilterElement';

export class AppConfig {
    // CODERADAR SERVER CONFIG
    static BASE_URL = 'https://adesso-coderadar-dev01.test-server.ag';
    static BASE_URL_LOCAL= 'http://localhost:8080';
    static USERNAME = 'radar';
    static PASSWORD = 'Password12!';

    static TIME_FILTER_MAPPING: ITimeFilterElement[] = [
      {
        name: "total",
        timestampValue: -1,
      },
      {
        name: "today",
        timestampValue: 86400000,
      },
      {
        name: "lastWeek",
        timestampValue: 604800000,
      },
      {
        name: "lastTwoWeeks",
        timestampValue: 1209600000,
      },
      {
        name: "lastMonth",
        timestampValue: 2629743000 ,
      },
      {
        name: "lastSixMonths",
        timestampValue: 15778458000,
      },
    ];

    // METRIC NAME MAPPING
    static METRIC_NAME_MAPPING: IMetric[] = [
        {
            shortName: 'ArrayTypeStyle',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.ArrayTypeStyleCheck',
            pointValue: 5,
            shortDescription: 'Checks the style of array type definitions.'
        },
        {
            shortName: 'TodoComments',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TodoCommentCheck',
            pointValue: 15,
            shortDescription: 'A check for TODO comments.'
        },
        {
            shortName: 'TrailingComment',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TrailingCommentCheck',
            pointValue: 5,
            shortDescription: 'Check to ensure that comments are the only thing on a line. '
        },
        {
            shortName: 'UncommentedMains',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UncommentedMainCheck',
            pointValue: 5,
            shortDescription: 'Detects uncommented main methods.'
        },
        {
            shortName: 'UpperEll',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UpperEllCheck',
            pointValue: 5,
            shortDescription: 'Checks that long constants are defined with an upper ell.'
        },
        {
            shortName: 'AnnotationLocation',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.annotation.AnnotationLocationCheck',
            pointValue: 5,
            shortDescription: 'Check location of annotation on language elements.'
        },
        {
            shortName: 'MissingOverride',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.annotation.MissingOverrideCheck',
            pointValue: 5,
            shortDescription: 'Verifies that the Override annotation is present when the inheritDoc javadoc tag is present. '
        },
        {
            shortName: 'AvoidNestedBlocks',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.AvoidNestedBlocksCheck',
            pointValue: 10,
            shortDescription: 'Finds nested blocks.'
        },
        {
            shortName: 'EmptyCatchBlock',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.EmptyCatchBlockCheck',
            pointValue: 10,
            shortDescription: 'Checks for empty catch blocks. '
        },
        {
            shortName: 'LeftCurly',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.LeftCurlyCheck',
            pointValue: 3,
            shortDescription: 'Checks the placement of left curly braces. '
        },
        {
            shortName: 'NeedBraces',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.NeedBracesCheck',
            pointValue: 3,
            shortDescription: 'Checks for braces around code blocks. '
        },
        {
            shortName: 'RightCurly',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.RightCurlyCheck',
            pointValue: 3,
            shortDescription: 'Checks the placement of right curly braces. '
        },
        {
            shortName: 'AvoidInlineConditionals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.AvoidInlineConditionalsCheck',
            pointValue: 5,
            shortDescription: 'Detects inline conditionals. '
        },
        {
            shortName: 'CovariantEquals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.CovariantEqualsCheck',
            pointValue: 5,
            shortDescription: 'Checks that if a class defines a covariant method equals, then it defines method equals(java.lang.Object). '
        },
        {
            shortName: 'DeclarationOrder',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.DeclarationOrderCheck',
            pointValue: 5,
            shortDescription: 'Checks that the parts of a class or interface declaration appear in the order suggested by the Code Conventions for the Java Programming Language. '
        },
        {
            shortName: 'DefaultComesLast',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.DefaultComesLastCheck',
            pointValue: 5,
            shortDescription: 'Check that the default is after all the cases in a switch statement.'
        },
        {
            shortName: 'EmptyStatement',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EmptyStatementCheck',
            pointValue: 3,
            shortDescription: 'Detects empty statements (standalone ;).  '
        },
        {
            shortName: 'EqualsAvoidNull',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EqualsAvoidNullCheck',
            pointValue: 5,
            shortDescription: 'Checks that any combination of String literals is on the left side of an equals() comparison.'
        },
        {
            shortName: 'ExplicitInitialization',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ExplicitInitializationCheck',
            pointValue: 5,
            shortDescription: 'Checks if any class or object member explicitly initialized to default for its type value.'
        },
        {
            shortName: 'FallThrough',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FallThroughCheck',
            pointValue: 10,
            shortDescription: 'Checks for fall through in switch statements Finds locations where a case contains Java code - but lacks a break, return, throw or continue statement.'
        },
        {
            shortName: 'FinalLocalVariable',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FinalLocalVariableCheck',
            pointValue: 5,
            shortDescription: 'Ensures that local variables that never get their values changed, must be declared final.'
        },
        {
            shortName: 'HiddenField',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.HiddenFieldCheck',
            pointValue: 10,
            shortDescription: 'Checks that a local variable or a parameter does not shadow a field that is defined in the same class.'
        },
        {
            shortName: 'IllegalCatch',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalCatchCheck',
            pointValue: 15,
            shortDescription: 'Catching java.lang.Exception, java.lang.Error or java.lang.RuntimeException is almost never acceptable.'
        },
        {
            shortName: 'IllegalThrows',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalThrowsCheck',
            pointValue: 15,
            shortDescription: 'Throwing java.lang.Error or java.lang.RuntimeException is almost never acceptable. '
        },
        {
            shortName: 'MagicNumber',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MagicNumberCheck',
            pointValue: 5,
            shortDescription: 'Checks for magic numbers.'
        },
        {
            shortName: 'MissingSwitchDefault',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MissingSwitchDefaultCheck',
            pointValue: 5,
            shortDescription: 'Checks that switch statement has "default" clause.'
        },
        {
            shortName: 'MultipleStringLiterals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck',
            pointValue: 5,
            shortDescription: 'Checks for multiple occurrences of the same string literal within a single file.'
        },
        {
            shortName: 'MultipleVariableDeclarations',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleVariableDeclarationsCheck',
            pointValue: 5,
            shortDescription: 'Checks that each variable declaration is in its own statement and on its own line. '
        },
        {
            shortName: 'NestedForDepth',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedForDepthCheck',
            pointValue: 5,
            shortDescription: 'Check the number of nested for -statements. '
        },
        {
            shortName: 'NestedIfDepth',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedIfDepthCheck',
            pointValue: 5,
            shortDescription: 'Restricts nested if-else blocks to a specified depth (default = 1).'
        },
        {
            shortName: 'NestedTryDepth',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedTryDepthCheck',
            pointValue: 5,
            shortDescription: 'Restricts nested try-catch-finally blocks to a specified depth (default = 1). '
        },
        {
            shortName: 'OneStatementPerLine',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OneStatementPerLineCheck',
            pointValue: 5,
            shortDescription: 'Restricts the number of statements per line to one. '
        },
        {
            shortName: 'OverloadMethodsDeclarationOrder',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OverloadMethodsDeclarationOrderCheck',
            pointValue: 5,
            shortDescription: 'Checks that overload methods are grouped together.'
        },
        {
            shortName: 'ReturnCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ReturnCountCheck',
            pointValue: 5,
            shortDescription: ' Restricts return statements to a specified count (default = 2).'
        },
        {
            shortName: 'SimplifyBooleanExpression',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.SimplifyBooleanExpressionCheck',
            pointValue: 10,
            shortDescription: 'Checks for overly complicated boolean expressions. '
        },
        {
            shortName: 'SimplifyBooleanReturn',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.SimplifyBooleanReturnCheck',
            pointValue: 10,
            shortDescription: 'Checks for overly complicated boolean return statements. '
        },
        {
            shortName: 'VariableDeclarationUsageDistance',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.VariableDeclarationUsageDistanceCheck',
            pointValue: 5,
            shortDescription: 'Checks the distance between declaration of variable and its first usage.'
        },
        {
            shortName: 'DesignForExtension',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.DesignForExtensionCheck',
            pointValue: 5,
            shortDescription: 'The check finds classes that are designed for extension (subclass creation).'
        },
        {
            shortName: 'HideUtilityClassConstructor',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.HideUtilityClassConstructorCheck',
            pointValue: 5,
            shortDescription: 'Make sure that utility classes (classes that contain only static methods) do not have a public constructor.'
        },
        {
            shortName: 'OneTopLevelClass',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.OneTopLevelClassCheck',
            pointValue: 5,
            shortDescription: 'Checks that each top-level class, interface or enum resides in a source file of its own.'
        },
        {
            shortName: 'VisibilityModifier',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.VisibilityModifierCheck',
            pointValue: 5,
            shortDescription: 'Checks visibility of class members. '
        },
        {
            shortName: 'AvoidStarImport',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStarImportCheck',
            pointValue: 5,
            shortDescription: 'Check that finds import statements that use the * notation.'
        },
        {
            shortName: 'AvoidStaticImport',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStaticImportCheck',
            pointValue: 5,
            shortDescription: 'Check that finds static imports.'
        },
        {
            shortName: 'RedundantImports',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.RedundantImportCheck',
            pointValue: 5,
            shortDescription: 'Checks for imports that are redundant. '
        },
        {
            shortName: 'UnusedImports',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.UnusedImportsCheck',
            pointValue: 5,
            shortDescription: 'Checks for unused import statements.'
        },
        {
            shortName: 'Indentation',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.indentation.IndentationCheck',
            pointValue: 5,
            shortDescription: 'Checks the style of array type definitions.'
        },
        {
            shortName: 'CommentsIndentation',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.indentation.CommentsIndentationCheck',
            pointValue: 5,
            shortDescription: 'Checks the style of array type definitions.'
        },
        {
            shortName: 'BooleanExpressionComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.BooleanExpressionComplexityCheck',
            pointValue: 1,
            shortDescription: 'Restricts nested boolean operators (&&, ||, &, | and ^) to a specified depth (default = 3). '
        },
        {
            shortName: 'CyclomaticComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck',
            pointValue: 1,
            shortDescription: 'Checks cyclomatic complexity against a specified limit.'
        },
        {
            shortName: 'RedundantModifier',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.modifier.RedundantModifierCheck',
            pointValue: 5,
            shortDescription: 'Checks for redundant modifiers in interface and annotation definitions.'
        },
        {
            shortName: 'AbbreviationAsWordInName',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.naming.AbbreviationAsWordInNameCheck',
            pointValue: 5,
            shortDescription: 'The Check validate abbreviations(consecutive capital letters) length in identifier name, it also allow in enforce camel case naming.'
        },
        {
            shortName: 'AbstractClassName',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.naming.AbstractClassNameCheck',
            pointValue: 5,
            shortDescription: 'Ensures that the names of abstract classes conforming to some regular expression and check that abstract modifier exists. '
        },
        {
            shortName: 'ExecutableStatementCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.ExecutableStatementCountCheck',
            pointValue: 1,
            shortDescription: 'Restricts the number of executable statements to a specified limit (default = 30).'
        },
        {
            shortName: 'GenericWhitespace',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.whitespace.GenericWhitespaceCheck',
            pointValue: 1,
            shortDescription: 'Checks that the whitespace around the Generic tokens are correct to the typical convention.'
        },
    ];

    static getMetricByMetricName(metricName: string): IMetric {
        return this.METRIC_NAME_MAPPING.find(namePair => namePair.metricName === metricName);
    }
}

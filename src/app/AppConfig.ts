import { environment } from '../environments/environment';
import { IMetric } from './interfaces/IMetric';
import { ITimeFilterElement } from './interfaces/ITimeFilterElement';
import { IUserInfo } from './interfaces/IUserInfo';

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

    static USER_NAME_MAPPING: IUserInfo[] = [
      {
        personName: 'Maxim Atanasov',
        githubName: 'maximAtanasov'
      },
      {
        personName: 'Leonie Adis',
        githubName: 'adis'
      },
      {
        personName: 'Leonie Adis',
        githubName: 'LeonieAdis'
      },
      {
        personName: 'Krause',
        githubName: 'KilianKrause'
      },
      {
        personName: 'Kilian Krause',
        githubName: 'Krause'
      },
      {
        personName: 'Kilian Krause',
        githubName: 'KilianKrause'
      }
    ];


    // METRICS
    static METRICS: IMetric[] = [
        {
            shortName: 'Source Lines of Code (SLOC)',
            metricName: 'coderadar:size:sloc:java',
            pointValue: 0.1,
            shortDescription: 'Source Lines of Code.'
        },
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
            pointValue: 10,
            shortDescription: 'Detects uncommented main methods.'
        },
        {
            shortName: 'MissingOverride',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.annotation.MissingOverrideCheck',
            pointValue: 15,
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
            shortName: 'DefaultComesLast',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.DefaultComesLastCheck',
            pointValue: 5,
            shortDescription: 'Check that the default is after all the cases in a switch statement.'
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
            pointValue: 3,
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
            pointValue: 15,
            shortDescription: 'Checks that switch statement has "default" clause.'
        },
        {
            shortName: 'MultipleStringLiterals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck',
            pointValue: 15,
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
            shortName: 'OneStatementPerLine',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OneStatementPerLineCheck',
            pointValue: 5,
            shortDescription: 'Restricts the number of statements per line to one. '
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
            shortName: 'AvoidStaticImport',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStaticImportCheck',
            pointValue: 5,
            shortDescription: 'Check that finds static imports.'
        },
        {
            shortName: 'UnusedImports',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.UnusedImportsCheck',
            pointValue: 5,
            shortDescription: 'Checks for unused import statements.'
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
    ];

    static getMetricByMetricName(metricName: string): IMetric {
        return this.METRICS.find(namePair => namePair.metricName === metricName);
    }

    static getGithubName(commitAuthor: string): string {
        let githubUser = this.USER_NAME_MAPPING.find(namePair => namePair.personName === commitAuthor);
        if(githubUser) {
          console.log(githubUser.githubName);
          return githubUser.githubName;
        } else {
          console.log(commitAuthor);
          return commitAuthor;
        }
    }
    static getPersonName(commitAuthor: string): string {
        let person = this.USER_NAME_MAPPING.find(namePair => namePair.githubName === commitAuthor);
        if(person) {
          return person.personName;
        } else {
          return commitAuthor;
        }
    }
}

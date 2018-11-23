import { environment } from '../environments/environment';
import { IMetric } from './interfaces/IMetric';
import { ITimeFilterElement } from './interfaces/ITimeFilterElement';

export class AppConfig {
    // CODERADAR SERVER CONFIG
    static BASE_URL = 'https://adesso-coderadar-dev01.test-server.ag';
    //static BASE_URL = 'http://localhost:8080';
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
            shortName: 'CyclomaticComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck',
            pointValue: 15,
            shortDescription: 'Checks cyclomatic complexity against a specified limit.'
        },
        {
            shortName: 'NPathComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.NPathComplexityCheck',
            pointValue: 15,
            shortDescription: 'Checks the npath complexity against a specified limit.'
        },
        {
            shortName: 'TodoComments',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TodoCommentCheck',
            pointValue: 15,
            shortDescription: 'A check for TODO comments.'
        },
        {
            shortName: 'UncommentedMains',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UncommentedMainCheck',
            pointValue: 5,
            shortDescription: 'Detects uncommented main methods.'
        },
        {
            shortName: 'EqualsAvoidNull',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EqualsAvoidNullCheck',
            pointValue: 10,
            shortDescription: 'Checks that any combination of String literals is on the left side of an equals() comparison.'
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
            pointValue: 5,
            shortDescription: 'Checks that a local variable or a parameter does not shadow a field that is defined in the same class.'
        },
        {
            shortName: 'IllegalCatch',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalCatchCheck',
            pointValue: 15,
            shortDescription: 'Catching java.lang.Exception, java.lang.Error or java.lang.RuntimeException is almost never acceptable.'
        },
        {
            shortName: 'MagicNumber',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MagicNumberCheck',
            pointValue: 15,
            shortDescription: 'Checks for magic numbers.'
        },
        {
            shortName: 'MultipleStringLiterals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck',
            pointValue: 10,
            shortDescription: 'Checks for multiple occurrences of the same string literal within a single file.'
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
            pointValue: 10,
            shortDescription: ' Restricts return statements to a specified count (default = 2).'
        },
        {
            shortName: 'VariableDeclarationUsageDistance',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.VariableDeclarationUsageDistanceCheck',
            pointValue: 5,
            shortDescription: 'Checks the distance between declaration of variable and its first usage.'
        },
        {
            shortName: 'HideUtilityClassConstructor',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.HideUtilityClassConstructorCheck',
            pointValue: 5,
            shortDescription: 'Make sure that utility classes (classes that contain only static methods) do not have a public constructor.'
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
            shortName: 'UnusedImports',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.UnusedImportsCheck',
            pointValue: 10,
            shortDescription: 'Checks for unused import statements.'
        },
        {
            shortName: 'AbstractClassName',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.name.AbstractClassNameCheck',
            pointValue: 5,
            shortDescription: 'Ensures that the names of abstract classes conforming to some regular expression and check that abstract modifier exists. '
        },
        {
            shortName: 'LineLength',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.LineLengthCheck',
            pointValue: 5,
            shortDescription: 'Checks for long lines.'
        },
    ];

    // VISUALIZATION SETTINGS
    static EDGE_LENGTH_FACTOR = 2;
    static HEIGHT_FACTOR = 0.1;
    // static GLOBAL_MAX_GROUND_AREA = 100;
    // static GLOBAL_MIN_GROUND_AREA = 1;
    // static GLOBAL_MAX_HEIGHT = 100;
    // static GLOBAL_MIN_HEIGHT = 1;
    static BLOCK_SPACING = 5;
    static MODULE_BLOCK_HEIGHT = 5;

    // CAMERA SETTINGS
    static CAMERA_NEAR = 0.1;
    static CAMERA_FAR = 100000;
    static CAMERA_DISTANCE_TO_FOCUSSED_ELEMENT = 100;
    static CAMERA_ANIMATION_DURATION = 1500;

    // COLORS
    static COLOR_HIERARCHY_RANGE: string[] = ['#cccccc', '#525252'];
    static COLOR_HEATMAP_RANGE: string[] = ['#ffffff', '#ffc905', '#f78400', '#e92100', '#9b1909', '#4f1609', '#5d0000'];
    static COLOR_CONNECTION = '#000000';

    static COLOR_FIRST_COMMIT = '#0e8cf3';
    static COLOR_SECOND_COMMIT = '#ffb100';

    static COLOR_ADDED_FILE = '#49c35c';
    static COLOR_DELETED_FILE = '#d90206';
    static COLOR_UNCHANGED_FILE = '#cccccc';

    static getShortNameByMetricName(metricName: string): IMetric {
        return this.METRIC_NAME_MAPPING.find(namePair => namePair.metricName === metricName);
    }
}

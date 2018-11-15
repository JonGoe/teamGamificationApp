import { environment } from '../environments/environment';
import { IMetric } from './interfaces/IMetric';

export class AppConfig {
    // CODERADAR SERVER CONFIG
    static BASE_URL = 'http://localhost:8080';
    static USERNAME = 'radar';
    static PASSWORD = 'Password12!';

    // METRIC NAME MAPPING
    static METRIC_NAME_MAPPING: IMetric[] = [
        { shortName: 'Lines of Code (LOC)', metricName: 'coderadar:size:loc:java' },
        { shortName: 'Comment Lines of Code (CLOC)', metricName: 'coderadar:size:cloc:java' },
        { shortName: 'Source Lines of Code (SLOC)', metricName: 'coderadar:size:sloc:java' },
        { shortName: 'Effective Lines of Code (ELOC)', metricName: 'coderadar:size:eloc:java' },
        // tslint:disable-next-line:max-line-length
        {
            shortName: 'CyclomaticComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck'
        },
        { shortName: 'JavaNCSS', metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.JavaNCSSCheck' },
        { shortName: 'NPathComplexity', metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.NPathComplexityCheck' },
        // tslint:disable-next-line:max-line-length
        {
            shortName: 'ExecutableStatementCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.ExecutableStatementCountCheck'
        },
        {
            shortName: 'NewlineAtEndOfFileCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.NewlineAtEndOfFileCheck'
        },
        {
            shortName: 'OuterTypeFilenameCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.OuterTypeFilenameCheck'
        },
        {
            shortName: 'TodoCommentCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TodoCommentCheck'
        },
        {
            shortName: 'UncommentedMainCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UncommentedMainCheck'
        },
        {
            shortName: 'AnnotationUseStyleCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.annotation.AnnotationUseStyleCheck'
        },
        {
            shortName: 'RightCurlyCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.RightCurlyCheck'
        },
        {
            shortName: 'DeclarationOrderCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.DeclarationOrderCheck'
        },
        {
            shortName: 'EqualsAvoidNullCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EqualsAvoidNullCheck'
        },
        {
            shortName: 'FinalLocalVariableCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FinalLocalVariableCheck'
        },
        {
            shortName: 'HiddenFieldCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.HiddenFieldCheck'
        },
        {
            shortName: 'IllegalCatchCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalCatchCheck'
        },
        {
            shortName: 'MagicNumberCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MagicNumberCheck'
        },
        {
            shortName: 'MultipleStringLiteralsCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck'
        },
        {
            shortName: 'NestedTryDepthCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedTryDepthCheck'
        },
        {
            shortName: 'OverloadMethodsDeclarationOrderCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OverloadMethodsDeclarationOrderCheck'
        },
        {
            shortName: 'ParameterAssignmentCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ParameterAssignmentCheck'
        },
        {
            shortName: 'ReturnCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ReturnCountCheck'
        },
        {
            shortName: 'VariableDeclarationUsageDistance',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.VariableDeclarationUsageDistanceCheck'
        },
        {
            shortName: 'FinalClassCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.FinalClassCheck'
        },
        {
            shortName: 'HideUtilityClassConstructorCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.HideUtilityClassConstructorCheck'
        },
        {
            shortName: 'InnerTypeLastCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.InnerTypeLastCheck'
        },
        {
            shortName: 'AvoidStarImportCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStarImportCheck'
        },
        {
            shortName: 'AvoidStaticImportCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStaticImportCheck'
        },
        {
            shortName: 'CustomImportOrderCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.CustomImportOrderCheck'
        },
        {
            shortName: 'ImportOrderCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.ImportOrderCheck'
        },
        {
            shortName: 'UnusedImportsCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.UnusedImportsCheck'
        },
        {
            shortName: 'IndentationCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.indentation.IndentationCheck'
        },
        {
            shortName: 'JavadocMethodCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocMethodCheck'
        },
        {
            shortName: 'JavadocPackageCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocPackageCheck'
        },
        {
            shortName: 'JavadocStyleCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocStyleCheck'
        },
        {
            shortName: 'JavadocTypeCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocTypeCheck'
        },
        {
            shortName: 'JavadocVariableCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.JavadocVariableCheck'
        },
        {
            shortName: 'WriteTagCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.javadoc.WriteTagCheck'
        },
        {
            shortName: 'CyclomaticComplexityCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck'
        },
        {
            shortName: 'NPathComplexityCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.NPathComplexityCheck'
        },
        {
            shortName: 'ModifierOrderCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.modifier.ModifierOrderCheck'
        },
        {
            shortName: 'AbstractClassNameCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.name.AbstractClassNameCheck'
        },
        {
            shortName: 'RegexpMultilineCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.regexp.RegexpMultilineCheck'
        },
        {
            shortName: 'LineLengthCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.LineLengthCheck'
        },
        {
            shortName: 'OperatorWrapCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.whitespace.OperatorWrapCheck'
        },
        {
            shortName: 'WhitespaceAroundCheck',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.whitespace.WhitespaceAroundCheck'
        },
        {
            shortName: 'defaultMetric',
            metricName: 'default'
        }
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
        //console.log(metricName);
        //console.log(this.METRIC_NAME_MAPPING.find(namePair => namePair.metricName === metricName));

        return this.METRIC_NAME_MAPPING.find(namePair => namePair.metricName === metricName);
    }
}

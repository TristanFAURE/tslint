/*
 * Copyright 2014 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

/// <reference path='../references.ts' />

describe("<no-unused-expression>", () => {
    var NoUnusedExpressionRule = Lint.Test.getRule("no-unused-expression");

    it("disallows unused expression statements", () => {
        var fileName = "rules/unused.expression.test.ts";
        var createFailure = Lint.Test.createFailuresOnFile(fileName, NoUnusedExpressionRule.FAILURE_STRING);
        var expectedFailures: Lint.RuleFailure[] = [
            createFailure([33, 1], [33, 3]),
            createFailure([34, 1], [34, 3]),
            createFailure([35, 1], [35, 7]),
            createFailure([36, 1], [36, 17]),
            createFailure([37, 1], [37, 21]),
            createFailure([38, 1], [38, 12]),
            createFailure([39, 1], [39, 13]),
            createFailure([40, 1], [40, 24]),
            createFailure([41, 1], [41, 25]),
            createFailure([42, 1], [42, 14]),
            createFailure([43, 1], [43, 24]),
        ];
        var actualFailures = Lint.Test.applyRuleOnFile(fileName, NoUnusedExpressionRule);

        Lint.Test.assertFailuresEqual(actualFailures, expectedFailures);
    });
});
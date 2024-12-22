# Unexpected NaN Result in Type Coercion

This repository demonstrates a common JavaScript bug involving type coercion and unexpected NaN (Not a Number) results.

## Description
The JavaScript function `foo` intends to handle `null`, `undefined`, and `NaN` values while performing addition. However, a non-numeric string input leads to `NaN` due to type coercion during the addition operation.

## Bug
The bug lies in the else block.  When a non-numeric string is passed, JavaScript attempts to convert it to a number for the addition.  If this conversion fails (as with 'abc'), it results in NaN. The function doesn't explicitly handle this case resulting in unexpected behavior.

## Solution
The solution involves explicit type checking using `typeof` to handle string inputs that cannot be converted to numbers appropriately.
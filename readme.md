## THIS REPOSITORY FORKED FROM [scurker/thousands](https://github.com/scurker/thousands) (License : MIT © [Jason Wilson](http://scurker.com))
# thousands [![Build](https://github.com/taccl/thousands/actions/workflows/Build.yml/badge.svg)](https://github.com/taccl/thousands/actions/workflows/Build.yml)
A micro javascript library for formatting numbers with thousands separator.

## Install
#### npm ```npm i --save github:taccl/thousands```
#### yarn ```yarn add github:taccl/thousands```
## Usage

```js
import { thousands } from '@taccl/thousands';

thousands(1234);      // => '1,234'
thousands(123456);    // => '123,456'
thousands('1234.56'); // => '1,234.56'

thousands(1234, ' ');      // => '1 234'
thousands(123456, ' ');    // => '123 456'
thousands('1234.56', ' '); // => '1 234.56'

```

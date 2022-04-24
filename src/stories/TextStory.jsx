import React from "react";
import {storiesOf} from "@storybook/react";

import Text from '../04/Text';

storiesOf('Text',module)
    .addWithJSX('기본 설정', ()=><Text>안녕하세요</Text>)
    .addWithJSX('기본 설정2', ()=><Text children={'안녕하세요'}></Text>)
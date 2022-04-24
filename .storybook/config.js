import {configure, setAddon} from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from "storybook-addon-jsx";

function loadStories() {
    //스토리 파일 추가
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach(srcFile => {
        interopRequireDefault(context(srcFile));
    })
    require('../src/stories/InputStory');
    require('../src/stories/NewCounterStory');
}
setAddon(JSXAddon);
configure(loadStories, module);
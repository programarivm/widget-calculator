import WidgetActionTypes from '../constants/WidgetActionTypes';
import WidgetDispatcher from "../dispatcher/WidgetDispatcher.js";
import { EventEmitter } from 'events';

class WidgetStore extends EventEmitter {
	constructor() {
		super();
		WidgetDispatcher.register(this.handleActions.bind(this));
	}

	clickCalculatePacks(data) {
		// TODO ...
		this.emit("click.calculate_packs");
	}

	handleActions(action) {
		switch (action.type) {
			case WidgetActionTypes.CLICK_CALCULATE_PACKS:
				this.clickCalculatePacks(action.data);
				break;
			default:
        // do nothing
		}
	}
}

export default new WidgetStore();

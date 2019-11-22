import WidgetActionTypes from '../constants/WidgetActionTypes';
import WidgetDispatcher from "../dispatcher/WidgetDispatcher.js";
import { EventEmitter } from 'events';

class WidgetStore extends EventEmitter {
	constructor() {
		super();
		this.resetState();
		this.sizes = Object.keys(this.state.result).sort((a, b) => { return a - b; }).map(Number);
		WidgetDispatcher.register(this.handleActions.bind(this));
	}

	resetState() {
		this.state = {
			widgets: 0,
			result: {
				5: 0,
				7: 0,
				10: 0,
				15: 0,
				23: 0
			}
		};
	}

	getState() {
		return this.state;
	}

	clickCalculatePacks(data) {
		this.state.widgets = data.widgets;
		this.ruleA().ruleB();

		this.emit("click.calculate_packs");
	}

	/**
	 * Rule A.
	 *
	 * Send out no more widgets than necessary to fulfil the order.
	 */
	ruleA() {
		this.state.result[this.sizes[0]] = Math.ceil(this.state.widgets / this.sizes[0]);

		return this;
	}

	/**
	 * Rule B.
	 *
	 * Send out as few packs as possible to fulfil each order.
	 */
	ruleB() {
		for (let i = this.sizes.length - 1; i > 0; i--) {
			if (this.sizes[i] % this.sizes[0] === 0) {
				if (this.sizes[0] >= this.sizes[i] / this.sizes[0]) {
					this.state.result[this.sizes[i]] = Math.floor(this.sizes[0] * this.state.result[this.sizes[0]] / this.sizes[i]);
					this.state.result[this.sizes[0]] = ((this.state.result[this.sizes[0]] * this.sizes[0]) - (this.state.result[this.sizes[i]] * this.sizes[i])) / this.sizes[0];
				}
			}
		}
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

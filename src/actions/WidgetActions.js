import WidgetActionTypes from '../constants/WidgetActionTypes';
import WidgetDispatcher from "../dispatcher/WidgetDispatcher.js";

class WidgetActions {
	clickCalculatePacks(data) {
		WidgetDispatcher.dispatch({
			type: WidgetActionTypes.CLICK_CALCULATE_PACKS,
			data: data
		});
	}
}

export default new WidgetActions();

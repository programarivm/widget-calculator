import WidgetActions from '../../actions/WidgetActions.js';
import WidgetStore from '../../stores/WidgetStore.js';
import {
  Button, Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Input
} from 'reactstrap';
import React from 'react';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "Here comes the result."
    }
    this.handleClickCalculatePacks = this.handleClickCalculatePacks.bind(this);
  }

  componentDidMount() {
    WidgetStore.on("click.calculate_packs", () => {
      let newState = Object.assign({}, this.state);
      newState.result = WidgetStore.getState().result;
      this.setState(newState);
    });
  }

  handleClickCalculatePacks(e) {
    WidgetActions.clickCalculatePacks({ widgets: e.target.elements.widgets.value });
    e.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader className="bg-white">
          <h5 className="text-center">Wally's Widget</h5>
        </CardHeader>
        <CardBody className="d-flex justify-content-center">
          <Form className="form" onSubmit={ (e) => this.handleClickCalculatePacks(e) }>
            <FormGroup>
              <Input
                type="number"
                name="widgets"
                id="widgets"
                min={1}
                placeholder="How many widgets?"
                required
              />
            </FormGroup>
            <Button color="primary" block>Calculate packs</Button>
          </Form>
        </CardBody>
        <CardFooter className="text-muted">
          { JSON.stringify(this.state.result) }
        </CardFooter>
      </Card>
    );
  }
}

export { Calc };

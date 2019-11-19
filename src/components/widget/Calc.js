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
      result: null
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
          { this.state.result !== null ? JSON.stringify(this.state.result) : <small>Wally says: Have a lovely day!</small>}
        </CardFooter>
      </Card>
    );
  }
}

export { Calc };

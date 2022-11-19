import {Grid} from "@mui/material";
import AddMoneyHeader from "../components/AddMoney/AddMoneyHeader";
import AddMoneyForm from "../components/AddMoney/AddMoneyForm";


const AddMoney = (): JSX.Element => {
    return (
        <Grid container p={2}>
            <AddMoneyHeader/>
            <AddMoneyForm/>
        </Grid>
    )
}

export default AddMoney
import { Summary } from "../Summary";
import { TransitionTable } from "../TransactionsTable";
import { Container } from "./style";

export function Dashboard(){

    return(
        <Container>
            <Summary/>
            <TransitionTable />
        </Container>
    );
}
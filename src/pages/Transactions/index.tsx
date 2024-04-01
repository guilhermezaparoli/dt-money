import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { PriceHighligth, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighligth variant='income'>R$ 12.000,00</PriceHighligth>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <PriceHighligth variant='outcome'>- R$ 2.000,00</PriceHighligth>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}

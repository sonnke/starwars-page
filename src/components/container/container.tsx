import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

const Container = styled(Grid)`&&{
    display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   align-items: center;
   align-self: center;
   /* width: 700px; */
   min-height: 700px;
   /* justify-content: space-between; */
   padding: 20px;
   margin-top: 70px;

   box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
   border-radius: 4px;
   color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
 }`

export default Container;
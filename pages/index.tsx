import { HomePage } from '../feature';
import { MainLayout } from '../modules';

const IndexPage = () => (
  <MainLayout title="Главная">
    <HomePage />
  </MainLayout>
);

export default IndexPage;

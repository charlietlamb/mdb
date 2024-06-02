import Loading from './Loading';
import NextPage from './NextPage';
import PreviousPage from './PreviousPage';
import {PaginationButton} from './types/PaginationButton';

export default function PaginationButtons({
  isLoading,
  PreviousLink,
  NextLink,
}: {
  isLoading: boolean;
  PreviousLink: PaginationButton;
  NextLink: PaginationButton;
}) {
  return (
    <div className="flex w-full gap-2">
      <PreviousLink className="w-full">
        {isLoading ? <Loading /> : <PreviousPage className="w-full" />}
      </PreviousLink>
      <NextLink className="w-full">
        {isLoading ? <Loading /> : <NextPage className="w-full" />}
      </NextLink>
    </div>
  );
}

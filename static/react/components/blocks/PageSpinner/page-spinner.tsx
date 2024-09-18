import Spinner from '../Spinner/spinner'

export default function PageSpinner() {
  return (
    <p className="page-loading" data-cy="page-spinner">
      <Spinner />
    </p>
  )
}

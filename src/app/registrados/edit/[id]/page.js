
import FormPage from '../../new/page'

function Page({params}) {
    return (
        <>
            <div>
                <div>
                    <FormPage params={params.id}></FormPage>
                </div>
            </div>
        </>
    )
}

export default Page;
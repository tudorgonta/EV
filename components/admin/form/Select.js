import { useRouter } from 'next/router';

const Select = (props) => {
    const router = useRouter()
    const {id, close, data, deleteId, type} = props;

    async function handleSelect() {
        if(type == 'ENQ'){
            await fetch(`/api/adm/enq/${id}/status`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                } ,
                body: JSON.stringify(data)
            }).then((res) => {
                if(res.ok) {
                    close()
                    deleteId()
                    router.push("/admin/enq/"+id)
                }
            })
        } else if(type == 'USR') {
            await fetch(`/api/adm/users/${id}/role`, {
                method: 'PUT',
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                } ,
                body: JSON.stringify(data)
              }).then((res) => {
                close()
                deleteId()
                if(res.ok) router.push("/admin/users/"+id)
              })
        }
    }
  return (
    <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  {type=='ENQ' ? 'Change Status' : 'Change Role'}     
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={close}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  {type=='ENQ' ? 'Are you sure that you want to change the status of the enquiry?' : 'Are you sure that you want to change the role of the user'}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={close}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSelect()}
                  >
                    {type=='ENQ' ? 'Change Status' : 'Change Role'}              
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default Select
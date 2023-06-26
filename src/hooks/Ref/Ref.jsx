import { useRef } from "react"

export const Ref = () => {

  const lastPara = useRef()
  
  const moveDown = ()=> {
    lastPara.current.scrollIntoView({
      behavior : "smooth" , block : "center"
    })
  }

  return (
    <div>

      <h1>GO TO PARAGRAPH</h1>
      
      <button onClick={moveDown}> Move to down</button>
      <section>
        <img src="https://picsum.photos/id/236/200/300" />
        <p>possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam</p>
      </section>

      <section>
        <img src="https://picsum.photos/id/235/200/300" />
        <p>possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam</p>
      </section>

      <section>
        <img src="https://picsum.photos/id/226/200/300" />
        <p>possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam</p>
      </section>

      <section>
        <img src="https://picsum.photos/id/232/200/300" />
        <p>possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam</p>
      </section>

      <section>
        <img src="https://picsum.photos/id/231/200/300" />
        <p ref={lastPara}>possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam</p>
      </section>

    </div>
  )
}

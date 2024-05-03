import conn from './conexion.js'

export async function getAllPosts () {
    try{
        const [rows] = await conn.query('SELECT * FROM juego')
        return {status: 200, data: rows}


    } catch(e){
        console.log(e)
        return {status: 500, error: e}
        
    }

}

export async function createJuego (title, cont, img, creator) {
    try {
      const [result] = await conn.query(`INSERT INTO blogs (title, cont, img, creator) VALUES ('${title.replace(/'/g, '\'\'')}', '${cont.replace(/'/g, '\'\'')}', '${img.replace(/'/g, '\'\'')}', '${creator.replace(/'/g, '\'\'')}')`)
      return { status: 201, data: result }
  
    } catch (e) {
      console.log(e)
      return { status: '400', error: 'Incorrect body format' }
    }
  }

export async function deleteJuego (id) {
    try{
        const [existingJuego] = await conn.query(`SELECT * FROM juego WHERE id = ${id}`)
        if(existingJuego.length === 0){
            return {status: 404, error: 'Juego no encontrado'}

        }

        const [result] = await conn.query('DELETE FROM juego WHERE id = ${id}')
        return {status: 204, data: result}

    } catch(e){
        console.log(e)
        return {status: 500, error: e}

    }
}

export async function editJuego (id, title, cont, img, creator) {
    try{
        const [existingJuego] = await conn.query(`SELECT * FROM juego WHERE id = ${id}`)
        if (existingJuego.length === 0) {
            return{status: 404, error: 'Juego no encontrado'}
        }

        const [result] = await conn.query(`UPDATE blogs SET title = '${title.replace(/'/g, '\'\'')}', cont = '${cont.replace(/'/g, '\'\'')}', img = '${img.replace(/'/g, '\'\'')}', creator = '${creator.replace(/'/g, '\'\'')}' WHERE id = ${id}`)
        return {status: 200, data: result}

    }catch(e){
        console.log(e)
        return {status: 400, error: 'Incorrect body format'}

    }
}

export async function getJuegoById (id) {
    try {
      const [juego] = await conn.query(`SELECT * FROM juego WHERE id = ${id}`)
      if (juego.length === 0) {
        return { status: 404, error: 'Juego no encontrado' }
      }
      return { status: 200, data: juego }
    } catch (e) {
      console.log(e)
      return { status: 500, error: e }
    }
  }
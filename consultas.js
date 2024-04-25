const pool = require('./dbConfig');

const guardarPost = async (post) => {
  //const values = Object.values(post);
  const consulta = {      
    text: "INSERT INTO posts ( titulo, img, descripcion, likes ) values ( $1, $2, $3, 0)",
    values: post,
  };
  const result = await pool.query(consulta);
  return result;
};

const getPosts = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

const like = async (id) => {
  const result = await pool.query(`UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *`, [id]);
  return result.rows;
};

module.exports = { guardarPost, getPosts, like };

import './App.css';
import {useForm} from 'react-hook-form'


const App = () => {
  const isbn = require('node-isbn')
  let bookFound
  const { register, handleSubmit } = useForm({
    defaultValues: {
      isbn: '2765410057'
    },
  });
  const onSubmit = (data) => {
      isbn.resolve(data.isbn).then((book) => {
        bookFound = book;
        console.log(bookFound)
      }).catch(function (err) {
          console.log('Book not found', err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Entrez un isbn : <input type="text" id="isbn" name="isbn" {...register('isbn')} /></label>
        <input type="submit" value="Tester" />
      </form>
    </div>
    
  );
}

export default App;

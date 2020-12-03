<script>
  import db from './firebase';
  import { collectionData } from 'rxfire/firestore';
  import { startWith } from 'rxjs/operators';

  const query = db.collection('qnds').orderBy('timestamp');
  const qnds = collectionData(query, 'id').pipe(startWith([]));
</script>

<section class="hero is-primary is-bold is-fullheight">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">{$qnds.length} quick and dirties, so far...</h1>
    </div>
  </div>
</section>
<footer class="footer">
  <div class="content has-text-centered">
    <p>Simply made for fun. Check out the code <a href="https://github.com/everettblakley/quick-and-dirty">here</a></p>
  </div>
</footer>

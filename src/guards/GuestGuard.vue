<script>
import { onBeforeRouteEnter } from "vue-router";
const GuestGuard = {
  beforeRouteEnter(to, from, next) {
    if (!store.state.isAuthenticated) {
      const allowedRoutes = Object.keys(defaultLayout);
      if (allowedRoutes.includes(to.name)) {
        next();
      } else {
        next({ name: "login" });
      }
    } else {
      next();
    }
  },
};
export default GuestGuard;
</script>

<script>
	import { onMount } from "svelte";
  import { useNavigate, useLocation } from "svelte-navigator";
  import { user } from "../stores/users.js";

  const navigate = useNavigate();
  const location = useLocation();

  onMount(() => {
    if (!$user) {
      navigate("/", {
        state: { from: $location.pathname },
        replace: true,
      });
    }
  });
</script>

{#if $user}
	<slot />
{/if}
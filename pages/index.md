---
title: Arky - arky.gg
description: Official website of streamer and content creator Arkyfinity
---

<script setup lang="ts">
import frontPage from '../src/pages/frontPage.vue';
import articleIndex from '../src/components/articleIndex.vue';
import twitchSchedule from '../src/components/twitchSchedule.vue';
</script>

<frontPage />

### Schedule
<twitchSchedule :number-of-days="6" :stream="false" />

### Latest posts
<articleIndex :showPosts="4" />

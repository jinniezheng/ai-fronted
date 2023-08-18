<!--
 * @Author: mjjh
 * @LastEditTime: 2023-04-17 21:32:06
 * @FilePath: \chagpt-shuowen\src\components\Setting\index.vue
 * @Description: 弹出充值窗口
-->
<script setup lang='ts'>
import { computed, ref } from 'vue'
import { NModal, NTabPane, NTabs } from 'naive-ui'
import Recharge from './Recharge.vue'
import { SvgIcon } from '@/components/index'

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const active = ref('Recharge')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})

</script>

<template>
  <NModal v-model:show="show" :auto-focus="false" preset="card" style="width: 95%; max-width: 640px">
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <NTabPane name="Recharge" tab="Recharge">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:file-user-line" />
            <span class="ml-2">{{ $t('setting.recharge') }}</span>
          </template>
          <Recharge />
        </NTabPane>
      </NTabs>
    </div>
  </NModal>
</template>

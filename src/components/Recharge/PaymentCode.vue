<!--
 * @Author: jinxin
 * @LastEditTime: 2023-07-21 20:12:48
 * @FilePath:
 * @Description:
-->
<script setup lang='ts'>
import { NModal,NTabs,NTabPane } from 'naive-ui'
import { useBasicLayout } from '@/hooks/useBasicLayout'
import {computed} from "vue";

const { isMobile } = useBasicLayout()
interface Props {
	visible: boolean,
  set: number
}

interface Emit {
	(e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()
const showCode = computed({
	get() {
		return props.visible
	},
	set(visible: boolean) {
		emit('update:visible', visible)
	},
})
</script>

<template>
	<NModal v-model:show="showCode" style="width: 90%; max-width: 900px;" preset="card">
		<div class="space-y-4">
			<NTabs type="segment">
				<NTabPane name="local" tab="支付宝支付">

				</NTabPane>
				<NTabPane name="download" tab="微信支付">
				</NTabPane>
			</NTabs>
		</div>
	</NModal>
</template>

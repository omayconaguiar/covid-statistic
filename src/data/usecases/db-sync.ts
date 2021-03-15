import { SyncStatic } from '@/domain/usecases'
import { SyncStatisticRepository } from '@/data/protocols'

export class DbGetSyncStatistics implements SyncStatic {
  constructor (private readonly getStatisticsRepository: SyncStatisticRepository) {}

  async getSync (data: SyncStatic.Result): Promise<void> {
    await this.getStatisticsRepository.getSync(data)
  }
}
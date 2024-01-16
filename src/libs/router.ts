import { Router } from 'express';

import { logsRoute } from '../controllers';

const router = Router();

router.use('/logs', logsRoute);

export default router;

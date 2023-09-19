import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { FindImgDto } from './dto/findImgDto';

const supabaseURL = `https://bwgojkivbgvivnfhynow.supabase.co`;

const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3Z29qa2l2Ymd2aXZuZmh5bm93Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDk4NTE5MCwiZXhwIjoyMDEwNTYxMTkwfQ.b1Eqa3mQRTVfqAomQGEcwq0t58vCOp6kTUHaa2k6pSA`;
@Injectable()
export class UploadService {
  private supabase: SupabaseClient;
  public constructor() {
    this.supabase = createClient(supabaseURL, supabaseKey, {
      auth: { persistSession: false },
    });
  }

  async create(file: Express.Multer.File) {
    const { data, error } = await this.supabase.storage
      .from('products')
      .upload(file.originalname, file.buffer);

    if (error) throw new BadRequestException(error);

    return data;
  }

  async findImg(findImgDto: FindImgDto) {
    const url = this.supabase.storage
      .from('products')
      .getPublicUrl(findImgDto.path);

    return url.data.publicUrl;
  }
}
